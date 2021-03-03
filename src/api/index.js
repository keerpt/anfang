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
};

export function getCaseInfo2() {
    return request({
        url:'/case/getCaseInfo/?case_module=%E8%AE%BE%E5%A4%87%E7%BB%91%E5%AE%9A',
        method: 'get',
    })
}