import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export function getCaseInfo() {
    return request({
        url:'/case/getCaseInfo/',
        method: 'get',
    })
}
