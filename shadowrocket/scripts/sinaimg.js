let headers = $request.headers;
headers['Referer'] = 'https://weibo.com/';

$done({headers});