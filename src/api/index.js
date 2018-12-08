import goods from './goods'

export const fetchGoods = async () => {
        return new Promise(resolve => {
            resolve(goods)
        })
}