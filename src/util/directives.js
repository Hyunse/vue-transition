
// Local
export const foucs = {

}

// Global
export default (Vue) => {
    Vue.directive('focus', {
        inserted (el) {
            el.focus();
        }
    });

    Vue.directive('counter', {
        inserted (el) {
            let value = el.innerHtml
            let displayValue = 0
            console.log('counter :: ' + el.innerHtml);
            let interval = setInterval(() => {
                if (displayValue) {
                    let change = (value - displayValue) / 10
                    change = change >= 0 ? Math.ceil(change) : Math.floor(change)
                    displayValue = displayValue + change
                    el.innerHtml = displayValue
                } else {
                    clearInterval(interval);
                }
            }, 20)
            // 0 -> 10000

        }
    })
}