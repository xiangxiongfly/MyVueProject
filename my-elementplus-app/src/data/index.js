const Data = {
    getArticles() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            const article = {
                name: `文章名${i}`,
                number: i + 10,
                price: i * 10
            };
            array.push(article);
        }
        return array;
    }
};

export default Data;