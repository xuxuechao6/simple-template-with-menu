import Cookies from 'js-cookie'

const TokenKey = 'simple_token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


export const formatDate = time => {
    let now = new Date(time);
    let year = now.getFullYear(),
        month = now.getMonth() + 1,
        date = now.getDate(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    // return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    return year + "-" + checkTime(month) + "-" + checkTime(date) + " " + checkTime(hour) + ":" + checkTime(minute);
}
export const getLastMonth = () => {
    let now = new Date();

    let year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate();
    if (month != 0) {
        return new Date(year, month - 1, date)
    } else {
        return new Date(year - 1, 11, date)
    }
}

export const jsonUniq = (arr, key) => {
    //json 数组去重
    let arr1 = [arr[0]];
    arr.forEach(function(item1, idx1) {
        let flag = false;
        arr1.forEach(function(item2, idx2) {
            if (item1[key] == item2[key]) {
                flag = true;
                return;
            }
        });
        if (!flag) {
            arr1.push(item1);
        }
    });
    return arr1;
}

//排序函数
export const sortName = (arr, eachName) => {
    arr.forEach(function(item) {
        let temp = item[eachName];
        item.sortName = temp;
    });
    let resultArray = arr.sort(
        function compareFunction(param1, param2) {
            return param1.sortName.localeCompare(param2.sortName, "zh");
        }
    );
    return resultArray;
}