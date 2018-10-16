### React를 쓰는데는 babel, webpack이 꼭 필요하다?

아니요. React를 쓰는데에는 babel, webpack이 필요하지 않습니다. 없이 만들어 볼까요.


스케줄 팜플렛
이런 단순한 페이지를 만드는데에 과연 react가 필요할까요?
webpack은요?
link랑 scripts로 나누는건요?

창을 나누어서 보기 편해서요. 네 이유가 될 수 있습니다. 
나누는게 익숙해서요. 네 이유가 될 수 있습니다.
그러나 한 파일에서 보는게 좋은 사람은요?
inline style을 쓰는 건요?

또, react를 하다보면 질문을 받게 됩니다.
"아니, inline-style, inline event listener는 안좋은거라 배웠는데 이상한거 아니에요?"

그러게요. 우리는 왜 파일을 나누었을 까요?

그건 좋다. 그건 안좋다. 단순한 이분법으로 기술을 이해하다보면 웹의 본질을 잊게 만듭니다.
왜 좋은지, 왜 안좋은지, 과거에는 왜 이런 형식을 선택했고 버렸는지 알아야 색안경을 벗고 바로 볼 수 있으며, 과거에서 배울 수 있습니다.

예를 들면 script와 link에 type
inline style, inline event listener
requirejs (bad things로 구분되었었다.)

"재사용성을 어렵게 만든다." 이 말에 우리는 왜 쉽게납득을 하고 넘어갔을까요.
권위에 기댄다. 물론 이것은 개인이 야기한 문제는 아닙니다.



그러면 webpack, babel을 쓰는 이유는 뭘까요?

개발의 효율성 때문입니다.

모듈을 나누는 이유가 뭘까요?

1. 개발에서 반복적이고 귀찮은 부분을 해줍니다.
  - hot load, reload, jsx구문
2. 협업 능률이 오르기 때문입니다.
  - modules
3. 재사용을 할 수 있기 때문입니다.
  - utils, components

# 스터디.

나는 여러분들이 작은 프로젝트를 위해 무조건적으로 create-react-app을 돌리길 원하지 않습니다.
create-react-app을 돌리는데에도 합당한 이유가 있고, 필요한 부분을 수정, 보완 할 수 있기를 바랍니다.
합당한 이유라는 것은 비단 속도나, 모듈 같은 개발 이슈만을 가지고 있는 건 아닙니다. 회사, 팀 같은 집단이 React와 CRA를 주로 사용하였다면, 굳이 React를 쓸 필요가 없을 지라도, React를 적용하는게 옳을 수 있습니다. 

(그러니까, 아주 간단한 페이지, 인스턴트 한 페이지는 굳이 모든 것을 나눌 필요가 없다는 말입니다. 
하지만 저는 개인 프로젝트도 모듈을 나누는 편입니다. 단순히 제대로 정돈되지 않아 보이는 시각적인 불편함이 제 개발 능률을 떨어뜨리거든요.)


제가 하고 싶은 말은, 무슨 기술을 쓰던지 그건 별로 중요하지 않다는 것입니다. React만 할 줄 알아서는 React의 세계를 벗어나는 순간 아무 것도 할 수 없게됩니다. 누군가가 짜 둔 틀 안에서 Component를 만드는 일은 분명히 프론트엔드 개발자의 일이고 해야하는 일이지만, 미래에도 그럴까요? 