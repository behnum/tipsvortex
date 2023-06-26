import getAllTips from './getAllTips'

const prevTipObj = {
    prev: 1,
    setPrev: function (num: number) { this.prev = num }
}

export default async function getRandomTip(): Promise<Tip> {

    const results = await getAllTips()

    let randomIndex = prevTipObj.prev

    while (randomIndex === prevTipObj.prev) {
        randomIndex = Math.floor(Math.random() * results.length)
    }

    prevTipObj.setPrev(randomIndex)

    return results[randomIndex]
}