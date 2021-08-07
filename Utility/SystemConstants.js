// Keep all the System Constants the system may need for its general functioning
// i.e. anytime we need to store something on an ongoing basis which is key to the functioning of
// the system as a whole
const systemConstants = {
    resources: {
        images: {
            hungryCat: "https://reactnative.dev/docs/assets/p_cat2.png",
            nonHungryCat: "https://reactnative.dev/docs/assets/p_cat1.png",
        }
    },
    apiConstants: {
        apiCatFacts: {
            baseUrl: 'https://cat-fact.herokuapp.com',
            endpointCatFacts: '/facts',
        }
    }
}

export default systemConstants;