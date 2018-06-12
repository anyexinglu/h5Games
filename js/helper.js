export default {
    // 生成随机色，arr非空则随机提取一项，否则随机返回一个颜色。
    generateRandomColor: (arr = []) => {
        if (arr.length) {
            const randomIndex = parseInt(arr.length * Math.random());
            return arr[randomIndex];
        }
        else {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
}
