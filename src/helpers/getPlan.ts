
const getPlan = (plan: string) => {
    return plan === 'basic' ? (120 / 100) : (150 / 100)
}

export default getPlan
