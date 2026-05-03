const frieds = ["hasan", "kabir", "robin"]
const schoolFriend = ["hasan s", "kabir s", "robin s"]
const collageFriend = ["hasan c", "kabir c", "robin c"]


frieds.push(...schoolFriend)
frieds.push(...collageFriend)

console.log(frieds)


const user = { name: "hasan", phone: "03333333333" };

const otherInfo = { hobby: "song", color: "blue" }

const userInfo = { ...user, ...otherInfo }

console.log(userInfo)


// !rest operator


const sendInvite = (fried1: string, fried2: string, fried3: string) => {
    console.log(` salam nien${fried1}`)
    console.log(` salam nien${fried2}`)
    console.log(` salam nien${fried3}`)
}


sendInvite("hasan", "akib", "rakim")



const biesadi =  (...frieds: string[]) => {
    frieds.forEach((frieds: string) => console.log(`bier dawat ${frieds}`))
}


biesadi("raju", "rakib", "robin")