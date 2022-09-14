# algorithm-study-1

# AlgorithmStudy

반가워요 여러분 제가 깃을 사용할 줄 몰라서 일단은 브랜치를 따로 만들지 않고
풀리퀘스트를 이용하여 서로 코드리뷰를 <br/> 할 수 있는 방법을 안내해드리도록 하겠습니다!

## 문제 풀기

제 레포지토리는 제가 fork를 할 수 없어서 친구의 레포지토리를 예시로 들었습니다
화면의 구성만 참고하셔서 글을 읽어주시면 좋을 거 같습니다. 이해 안되시는 게 있으면 말씀해주세요!

1. 해당 레포지토리를 fork해주세여<br/><br/>

<img width="1386" alt="스크린샷 2022-08-30 오후 1 50 37" src="https://user-images.githubusercontent.com/104412610/187352125-962d1cef-9830-4d41-9e16-4accea3d99a8.png">

2. 저희 과제하는 것과 동일하게 fork한 본인 레포지토리로 이동하셔서 SSH URL을 복사하시고, git clone을 하시면 됩니다.<br/><br/>
   ![image](https://user-images.githubusercontent.com/104412610/187352707-c74508dc-a4eb-49d0-98c7-5142d98021a9.png)

3. clone한 폴더의 본인 깃허브 닉네임 혹은 본인 이름의 폴더를 만들어주세요 -> 폴더를 만드셨으면 해당 폴더 내에 해당 학습 주차의 폴더를 만들어주세요<br/><br/>

![스크린샷 2022-08-30 오후 2 15 11](https://user-images.githubusercontent.com/104412610/187355382-b7341b13-bac9-4904-a079-505ca671bb2e.png)
![스크린샷 2022-08-30 오후 2 17 25](https://user-images.githubusercontent.com/104412610/187355386-66422924-c258-43c2-b48a-3ebed0350c45.png)

4. 학습하는 주의 폴더에서 학습하신 문제를 푸시면 됩니다.(문제 번호.js) <br/><br/>
   ![image](https://user-images.githubusercontent.com/104412610/187355540-d2657217-f4dc-45bf-8534-f3dbebca831c.png)

5. 문제를 푸셨으면 그때그떄 add와 commit,push을 진행해주세요 ex) git add '학습한 문제' 와 git commit -m '해당 주차 문제번호 풀이 완료(ex : '1주차 2588번 완료')
   커밋 메세지 양식을 지켜주셔야 다른 분이 코드 리뷰할 때 해당 문제가 몇번 문제인지 확인할 수 있습니다.<br/><br/>
   ![image](https://user-images.githubusercontent.com/104412610/187356199-a6626cf4-cb3b-4071-9738-18ada8a997b5.png)

6. push까지 완료하셨다면 이제 본인이 포크한 레포지토리로 이동합니다.이동 후 아래 사진에 표시된 pull request를 눌러주시고 아래 순서대로 진행해주시면 됩니다.(pull request는 주에 한번만 진행)
   <img width="1413" alt="image" src="https://user-images.githubusercontent.com/104412610/187356839-fd91522e-3fa3-4dbb-8038-c82ea7cf0c08.png">
   <img width="1335" alt="스크린샷 2022-08-30 오후 2 30 32" src="https://user-images.githubusercontent.com/104412610/187357196-a6a7bd7b-f964-42bc-ba31-97d43253559f.png">

7. 아래 폼과 같이 제목을 입력해주시고 Create pull request를 하시면 됩니다.
   <img width="1290" alt="스크린샷 2022-08-30 오후 2 33 21" src="https://user-images.githubusercontent.com/104412610/187357445-c90add2a-8580-48e4-b5f8-50879840263a.png">

8. 위 과정이 완료되었다면, 원본 레포지토리의 Pull requests에 들어가시면 본인이 올린 Pull Request와 다른 분들이 올린 pull request를 확인할 수 있습니다<br/>
   주가 바뀔 때마다 제가 merge를 해서 원본 레포에 업데이트해드릴 예정입니다. merge를 하면 해당 주차에 올리신 pull request가 사라지니 매주 제가 말씀드리면 pull request 한번씩 부탁드리겠습니다.
   2주차 시작 때 pull request를 먼저 해두시고, 해당 주차에 관한 문제들은 작업 후 git push를 하시면 pull request엔 자동으로 해당 목록이 추가됩니다.
   그러므로 주차별로 한번만 Pull request를 하시면 됩니다.
   <img width="1399" alt="스크린샷 2022-08-30 오후 2 34 44" src="https://user-images.githubusercontent.com/104412610/187357796-5f678f9f-fd15-437e-89ae-aa3eb0c250dc.png">

## 코드리뷰 하는법

1. 다른 사람의 pull request를 들어간다.
2. 코드리뷰를 작성하고 싶은 커밋메세지를 클릭한다.
   <img width="846" alt="스크린샷 2022-08-30 오후 2 39 21" src="https://user-images.githubusercontent.com/104412610/187359002-08392966-5242-485d-99de-386d546e2fd4.png">

<img width="1391" alt="스크린샷 2022-08-30 오후 2 46 34" src="https://user-images.githubusercontent.com/104412610/187359239-26b9c156-790a-466b-948e-2baf7ccf4499.png">

<img width="1117" alt="스크린샷 2022-08-30 오후 2 49 29" src="https://user-images.githubusercontent.com/104412610/187359566-ce64ccb4-7b76-4411-8d2f-299e6016f58e.png">

표시된 상자를 누르시면 submit review 버튼이 생긴 창이 하나 나오는 데 그것까지 클릭해주시면 됩니다.
<img width="1128" alt="스크린샷 2022-08-30 오후 2 51 20" src="https://user-images.githubusercontent.com/104412610/187359954-f884f05c-ec60-4288-ab6e-1c886e1b9d51.png">

누군가 먼저 해당 파일에 대해 코멘트를 달았으면 위 과정은 안하셔도 되고 아래 화면 input창에다 원하는 코멘트를 써주시면 됩니다.
<img width="1178" alt="스크린샷 2022-08-30 오후 2 54 34" src="https://user-images.githubusercontent.com/104412610/187360552-979a23ba-e11a-45af-beaf-016d893175bc.png">
