const txtYear = document.querySelector('#txtYear');
const selMon = document.querySelector('#selMon');
const selDay = document.querySelector('#selDay');

// 어제 날짜 구하기
const init = () => {
  // 오늘 날짜 구하기
  const today = new Date();

  // 년, 월, 일 변수에 담기
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  // 일 -1
  let day = today.getDate() - 1;

  // 화면에 보여주기
  txtYear.value = year;
  //   selMon.value = month;
  //   if (month < 10) {
  //     month = '0' + month;
  //   }
  //   if (day < 10) {
  //     day = '0' + day;
  //   }
  //   selMon.value = month;
  //   selDay.value = day;
  selMon.value = month < 10 ? '0' + month : month;
  selDay.value = day < 10 ? '0' + day : day;
};
init();

function show(movieCd) {
  console.log(movieCd);

  url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=';
  url += movieCd;

  // 영화한글제목 : movieNm
  // 영화영어제목 : movieNmEn
  // 상영시간 : showTm
  // 감독 : directors
  // 배우 : actors
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let result = '';
      let movieInfoResult = data.movieInfoResult.movieInfo;
      let directors = data.movieInfoResult.movieInfo.directors;
      let actors = data.movieInfoResult.movieInfo.actors;

      console.log(movieInfoResult);

      result += `<ul>`;
      result += `<li>영화한글제목 : ${movieInfoResult.movieNm}</li>`;
      result += `<li>영화영어제목 : ${movieInfoResult.movieNmEn}</li>`;
      result += `<li>상영시간 : ${movieInfoResult.showTm} 분</li>`;
      result += `</ul>`;
      directors.forEach((director) => {
        result += `<li>감독 : ${director.peopleNm}</li>`;
      });
      result += `<li> 출연배우 : </li>`;
      actors.forEach((actor) => {
        result += `${actor.peopleNm} `;
      });

      document.querySelector('.box2').innerHTML = result;
    });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  //영화진흥위원회 사용자가 선택한 날짜의 박스 오피스 가져오기
  let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
  url += txtYear.value + selMon.value + selDay.value;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let result = '';
      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);
      boxofficeList.forEach((movie) => {
        // 순위
        // 1 위(증감) : 파묘

        // 증감을 변수에 담는다.
        let rankInten = movie.rankInten;

        result += `${movie.rank} 위(`;
        if (rankInten > 0) {
          result += '▲';
        } else if (rankInten < 0) {
          result += '▼';
        }
        result += `${movie.rankInten} ) : `;
        result += `<a href="#" onclick='javascript:show(${movie.movieCd})'>${movie.movieNm}</a><br>`;
      });
      // 네모 박스 안에 boxofficeList 값 출력
      document.querySelector('#msg').innerHTML = result;
    })
    .catch(() => console.log('주소 확인'));
});
