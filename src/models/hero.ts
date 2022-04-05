import { Effect, Reducer, Subscription, request } from 'umi';

export interface HeroProps {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}

export interface HeroModelState {
  name: string;
  heros: [];
  filterKey: number;
  freeheros:[];
  itemHover:number;
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
    fetch: Effect;
  };
  reducers: {
    save: Reducer<HeroModelState>;
  };
  subscriptions: { setup: Subscription };
}

const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'hero',
    heros: [],
    filterKey: 0,
    freeheros: [],
    itemHover: 0  //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
  },

  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      // const data = yield request('/api/herodetails.json', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json; charset=utf-8',
      //   },
      //   body: JSON.stringify({
      //     ename: 110,
      //   }),
      // });
      const data = yield request('/api/web201605/js/herolist.json');

      // const herolist = yield call(queryHeroList);
      // const herodetails = yield call(getHeroDetails, { ename: 110 });
      const freeheros = yield request('/apimock/freeheros.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          number: 10,
        }),
      });
      const localData = [
        {
          ename: 105,
          cname: '廉颇',
          title: '正义爆轰',
          new_type: 0,
          hero_type: 3,
          skin_name: '正义爆轰|地狱岩魂',
        },
        {
          ename: 106,
          cname: '小乔',
          title: '恋之微风',
          new_type: 0,
          hero_type: 2,
          skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        },
      ];
      yield put({
        type: 'save',
        payload: {
          heros: data || localData,
          freeheros,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    }
  },
};

export default HeroModel;
