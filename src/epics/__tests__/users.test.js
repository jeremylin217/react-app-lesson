import { ajax } from 'rxjs/ajax'
import { TestScheduler } from 'rxjs/testing'
import { getUserRequest, getUserReceive } from '@/actions/user'
import { getUser } from '@/epics/users'

jest.mock('rxjs/ajax')

describe('getUser epic', () => {
  describe('when a user are requested', () => {
    it('creates an action to receive user', () => {
      const id = '1'
      const user = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      }

      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
      })

      testScheduler.run(({ hot, cold, expectObservable }) => {
        // hot(marbleDiagram: string, values?: object, error?: any) - 建立一個 Hot observable
        const action$ = hot('-a', {
          a: getUserRequest(id),
        })
        const state$ = null
        ajax.getJSON.mockImplementation(() =>
          cold('--a', {
            a: user,
          })
        )

        const output$ = getUser(action$, state$)

        // cold(marbleDiagram: string, values?: object, error?: any) - 建立一個 Cold Observable ，測試開始時，observable 才會被啟動.
        expectObservable(output$).toBe('---a', {
          a: getUserReceive({ user }),
        })
      })
    })
  })
})

// 彈珠圖表示法
// ' ' 空白: 水平空白會被忽略，可用來與其他的彈珠圖對齊使用
// '-' frame: 1 個frame 代表一個單位的虛擬時間的流逝，可設定每一個 frame 的時間長度.
// [0-9]+[ms|s|m] 時間進行: 可利用數字搭配時間單位來表示一個長時間的虛擬時間的進行，時間單位有 ms (milliseconds), s (seconds), or m (minutes) ，數字與單位中間沒有任何空白 e.g. a 10ms b
// '|' 完成(complete): 表示一個成功完成的事件，會觸發 complete() 事件.
// '#' 錯誤(error): 表示發生錯誤發生，會觸發 error() 事件.
// [a-z0-9] e.g. 'a' 任何英文數字符號，代表 next() 時會送出的值.
// '()' 同步群組(sync groupings): 在同一個時間點需要呈現多個事件時，可利用 () 的方式包起來，在小括弧內的事件，都是發生在同一個時間點的
// '^' subscription point: (hot 限定)
