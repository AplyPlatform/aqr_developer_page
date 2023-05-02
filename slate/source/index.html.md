---
title: AQR Open API Reference | AQR 오픈 API

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - php
  - javascript
  - python

toc_footers:
  - <a href='https://aqr.aplx.link'>AQR 홈페이지</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>
  - © <script>var cYear=(new Date()).getFullYear();document.write(cYear);</script> APLY Inc.
includes:
  - errors

search: true
---

# 소개

'계좌 정보, QR로 보호하세요.'

AQR 개발자를 위한 Open API사용법과 예제코드를 제공합니다.


# Token 발급 받기

> Open API 사용을 위해 AQR 개발자 Token을 발급 받으세요.


```shell

```

```php

```

```javascript

```

```python

```


>

AQR Open API는 AQR 개발자 Token을 파라메터로 입력해야 사용할 수 있습니다.
개발자 Token은 아래의 AQR 계정 관리 사이트에 가입 및 로그인 후 "개인정보수정" 메뉴에서 받을 수 있습니다.

[AQR 계좌 정보 관리 사이트](https://aplx.link/manager).

#계좌 정보 생성

##계좌 정보 생성하기

```shell

curl -H "AQR-DEVELOPER-TOKEN: <DEVELOPER TOKEN>" -H "Content-type: application/x-www-form-urlencoded" -X POST -d 'email_address=<EMAILID>&account_number=1234567894321&bank_id=1&account_owner=<OWNER NAME>&phone_number=01012341234&account_name=<ACCOUNT NAME>' https://aplx.link/api/

```

```php

$body['email_address'] = '<EMAILID>';
$body['account_number'] = '1234567894321';
$body['bank_id'] = '1';
$body['account_owner'] = '<OWNER NAME>';
$body['phone_number'] = '01012341234';
$body['account_name'] = '<ACCOUNT NAME>';

$headers = array(
        'Content-Type: application/x-www-form-urlencoded',
        'AQR-DEVELOPER-TOKEN: <DEVELOPER TOKEN>'
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://aplx.link/api/');
curl_setopt($ch, CURLOPT_HTTPHEADER,  $headers);
curl_setopt($ch, CURLOPT_POST,    true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($body));
$response = curl_exec($ch);
//$json_list= json_decode($response, true);
curl_close($ch);

echo $response;

```

```javascript

var formdata = new FormData();
formdata.append("email_address", "<EMAILID>");
formdata.append("account_number", "123456789432");
formdata.append("bank_id", "1");
formdata.append("account_owner", "<OWNER NAME>");
formdata.append("phone_number", "01012341234");
formdata.append("account_name", "<ACCOUNT NAME>");


$.ajax({url : "https://aplx.link/api/",
       dataType : "json",
       contentType : "application/x-www-form-urlencoded",
       crossDomain: true,
       cache : false,
       data : formdata,
       type : "POST",
       async: false,
       beforeSend: function(request) {
          request.setRequestHeader("AQR-DEVELOPER-TOKEN", "<DEVELOPER TOKEN>");
        },
       success : function(r) {
         console.log(JSON.stringify(r));
         if(r.result == "success") {
           //r.data
         }
       },
       error:function(request,status,error){
           alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
       }
});

```

```python

import requests
headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'AQR-DEVELOPER-TOKEN' : '<DEVELOPER TOKEN>'
}
data = "email_address=<EMAILID>&account_number=1234567894321&bank_id=1&account_owner=<OWNER NAME>&phone_number=01012341234&account_name=<ACCOUNT NAME>"
url = 'https://aplx.link/api/'
response = requests.post(url, headers=headers,
                         data=data)
response.raise_for_status()
'response.json()


```
> 이 요청은 아래와 같이 JSON 구조로 응답합니다:

```json
{ 
	"result" : "success", 
	"qr_image" : "https://aplx.link/res?keyword=abcde", // QR 이미지 다운로드 경로
	"short_url" : "https://aq.gy/f/abcde" // 계좌 정보 고유 URL
}

```

### HTTP 요청

`POST https://aplx.link/api/`

### 파라메터

헤더 파라메터 | 설명
--------- | -----------
AQR-DEVELOPER-TOKEN | 부여받은 개발자 Token값을 헤더에 입력합니다.

POST 파라메터 | 설명
--------- | -----------
email_address | 가입시 입력한 이메일 주소를 입력합니다.
account_number | 계좌 번호를 입력합니다.
bank_id | 은행 id 를 입력합니다. (은행 id 테이블 참조)
account_owner | 예금주 명을 입력합니다.
phone_number | 예금주의 전화번호를 입력합니다.
account_name | 생성할 계좌 정보의 이름을 입력합니다. (Optional)

### 은행 id 테이블

id | 은행명
--------- | -----------
0	|카카오뱅크
1	|토스뱅크
2	|케이뱅크
3	|국민은행
4	|기업은행
5	|농협은행
6	|신한은행
7	|부산은행
8	|우체국
9	|새마을금고
10	|산업은행
11	|우리은행
12	|하나은행
13	|한국시티은행
14	|SC제일은행
15	|경남은행
16	|광주은행
17	|대구은행
18	|도이치은행
19	|뱅크오브아메리카
20	|산림조합중앙회
21	|저축은행
22	|수협은행
23	|신협중앙회
24	|전북은행
25	|제주은행
26	|중국건설은행
27	|중국공상은행
28	|중국은행
29	|BNP파리바은행
30	|HSBC은행
31	|JP모간체이스은행
32	|DB금융투자
33	|메리츠증권
34	|부국증권
35	|교보증권
36	|대신증권
37	|현대차증권
38	|미레에셋증권
39	|삼성증권
40	|신영증권
41	|신한투자증권
42	|에스케이증권
43	|유안타증권
44	|유진투자증권
45	|이베스트투자증권
46	|케이프투자증권
47	|키움증권
48	|한국포스증권
49	|하나증권
50	|하이투자증권
51	|한국투자증권
52	|한화투자증권
53	|KB증권
54	|다올투자증권
55	|BNK투자증권
56	|NH투자증권
57	|토스증권
58	|카카오페이증권
59	|IBK투자증권


