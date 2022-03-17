var question = {
    // E or I
    1 : {
        "title" : "친구와 어몽어스를 하려는 당신 ! 이때 친구가 모르는 사람들과 같이 게임을 하자고 한다. 당신의 대답은 ?", "type" : "EI", "a-btnTxt" : "&quot;다같이 게임하면서 친해지고 재미있겠다 !&quot;<br> 같이 게임을 하자고 한다.", "b-btnTxt" : "&quot;난 아는사람들이랑 게임하는게 더 편해 !&quot; <br>원래 알고지내던 사람들과 게임을 한다."
    },
    2 : {
        "title" : "게임 시작 전 보이스톡으로 서로 인사를 하며 자기소개를 하고 있다 ! 당신을 소개할 차례가 왔다. 이때 당신의 행동은 ?", "type" : "EI", "a-btnTxt" : "&quot;안녕하세요 ~ 친하게 지내요 ~&quot;<br>마이크에 말을 한다.", "b-btnTxt" : "말 대신 채팅으로 인사를 한다."
    },
    3 : {
        "title" : "플레이어 중 뉴비가 있다 ! 적응을 못하고 있는 뉴비에게 다들 말을 걸고있다 ! 이때 당신의 행동은 ?", "type" : "EI", "a-btnTxt" : "&quot;모르는거 있으면 물어보세요 ~&quot;<br>뉴비에게 먼저 걸어준다.", "b-btnTxt" : "&quot;그러던지 말던지 ~&quot;<br>그냥 신경을 끄고 게임을 할 준비를 한다."
    },
    // S or N
    4 : {
        "title" : "게임시작 ! 당신은 임포스터를 미션을 하며 임포스터를 찾아야한다 ! 이때 당신의 행동은 ?", "type" : "SN", "a-btnTxt" : "임포스터가 어디로 갔을지 예측하기 위해<br>플레이어들을 감시한다.", "b-btnTxt" : "대충 감으로 짐작한다."
    },    
    5 : {"title" : "플레이어 A가 함께 다니자고 제안을 한다. 이때 당신의 행동은 ?", "type" : "SN",   
        "a-btnTxt" : "&quot;A는 아직 임포스터로 의심되지 않으니까 같이다니자 !&quot; A의 제안을 받아드리고 같이 다닌다. ", "b-btnTxt" : "&quot;A가 의심되는 행동을 하지는 않았지만 <br>임포스터면 어떡하지 ?&quot; <br>가능성을 열어두고 A의 제안을 거절한다."
    },
    6 : {
        "title" : "플레이어 A, 플레이어 B 그리고 당신이 남았다. A와B 중 1명은 임포스터 ! 당신의 투표로 게임의 승패가 결정된다. 이때 당신의 투표는 ?", "type" : "SN", "a-btnTxt" : "&quot;A는 미션수행을 별로 안한거같은데..&quot;<br>A를 임포스터로 지목한다.", "b-btnTxt" : "&quot;내 느낌에는 B가 임포스터야 !&quot;<br>B를 임포스터로 지목한다."
    },
    // F or T   
    7 : {
        "title" : "뉴비가 임포스터로 의심을 받고있는 상황 ! 이때 당신의 행동은 ?", "type" : "FT", "a-btnTxt" : "&quot;아직 초보라 잘 모를수도 있죠 !&quot;<br>뉴비를 도와준다.", "b-btnTxt" : "&quot;뉴비지만 이번에는 임포스터 처럼 행동하는데 ?&quot;<br>뉴비를 임포스터로 지목한다."
    },
    8 : {
        "title" : "고인물 플레이어 A ! 모두가 플레이어 A를 죽이려한다! 이때 당신의 행동은 ?", "type" : "FT", "a-btnTxt" : "&quot;A가 너무잘해서 사람들이 죽이려 하는건가 ?&quot;<br>A를 살려주자고 말한다.", "b-btnTxt" : "&quot;A가 죽으면 게임이 쉬워 질 수 있을거같아 !&quot;<br>다른사람들과 A를 죽이는데 동참한다."
    },
    9 : {"title" : "중요 미션을 하지 않은 플레이어 B로 인해 게임에서 패배했다. 모두가 B를 추궁하고 있다. 이때 당신의 행동은 ?", "type" : "FT", "a-btnTxt" : "&quot;임포스터를 피하느라 깜빡 했을수도 있죠 !&quot;<br>B를 이해해준다.", "b-btnTxt" : "&quot;이번 게임은 너가 잘못했어 !&quot;<br>다른사람들과 함께 B를 추궁한다."
    },
    // J or P
    10 : {"title" : "게임이 다시 시작됬다 ! 나의 미션은 왼쪽 공간에 몰려있다 ! 이때 당신의 선택은 ?", "type" : "JP", "a-btnTxt" : "시작하자마자 미션을 수행하러 왼쪽 공간으로 달려간다.", "b-btnTxt" : "&quot;오른쪽 공간에는 뭐가 있지?&quot;<br>오른쪽 공간에 뭐가 있는지 둘러보러 간다."
    },
    11 : {"title" : "임포스터에게 죽지 않도록 2인 1조로 움직이기로 한다 ! 이때 당신의 선택은 ?", "type" : "JP", "a-btnTxt" : "&quot;단체 게임이니까 나도 2인1조로 움직여야해 !&quot;<br>플레이어 A와 2인1조로 움직인다.", "b-btnTxt" : "&quot;A와 나는 미션이 서로 반대이니까 혼자 다녀야겠어 !&quot;<br>A를 버리고 혼자 움직인다."
    },
    12 : {"title" : "시체를 발견했다 ! 모두 누구에게 투표를 해야 할 지 몰라 패스를 하려고 한다 !이때 당신의 선택은 ?", "type" : "JP", "a-btnTxt" : "&quot;난 이번에 반드시 임포스터를 잡아내겠어 !&quot;<br> 합리적인 선택으로 임포스터로 생각되는 플레이어에게 투표한다.", "b-btnTxt" : "&quot;모두 어려워하고 있으니 이번엔 패스를 하는게 좋을거 같은데..&quot;<br>다른 플레이어들과 같이 패스를 한다."
    }
}
var resMBTI = {
    // IS**
    "ISTP" : {"title":"ISTP", "subctx":"논리적인 실용주의자", "explain":"민감성과 도구 등을 다루는 능력이 뛰어나다. 보통 과묵한 편이며 자기자신에 대한 절제력이 있다. 그리고 에너지를 아끼려하며 자신이 직접 나서야 하는일이 아니면 나서려고 하지 않는다.상황을 파악하는 민감성이 좋은만큼 눈치도 빠르며, 조용하지만 주변 상황을 항상 파악하고 있다.", "img":"image/amongusBLACK.png"},
    "ISTJ" : {"title":"ISTJ", "subctx":"청렴결백한 논리주의자","explain":"사실에 대해 객관적이고 정확하게 판단하려하고 신중하고 책임감이 있다. 또한 자신에게 주어진 임무에 대해서는 완벽하게 수행하려하고 정해진 규칙들을 잘 준수한다.", "img":"image/amongusBLUE.png"},
    "ISFP" : {"title":"ISFP", "subctx":"호기심 많은 예술가", "explain":"타인에게 다정하며 온화한 성격을 가졌다. 서로간의 충돌을 피하고 화합하는것을 선호하며 충돌을 피하려는 성향을 가진다. 이러한 성향 때문에 자신의 감정과 타인의 감정에 대해 민감하게 생각하며 인간관계에 있어서 스트레스를 자주 받는다.", "img":"image/amongusBROWN.png"},
    "ISFJ" : {"title":"ISFJ", "subctx":"용감한 수호자", "explain":"보통 조용하고 차분한 성격을 가졌으며 자신 주변의 사람들에 대한 애정이 많다. 이러한 성격 때문에 주변의 사람들에게 신뢰를 얻는 편이다.", "img":"image/amongusGRAY.png"},
    // IN**
    "INTP" : {"title":"INTP", "subctx":"논리적인 사색가", "explain":"문제가 있으면 논리적으로 분석하여 해결하려고 한다. 주로 계획적으로 움직이기 보다는 즉흥적으로 움직이는 편이다. 즉, 계획은 짜놔도 그대로 움직이지 않을 경우가 다소 높다.", "img":"image/amongusGREEN.png"},
    "INTJ" : {"title":"INTJ", "subctx":"용의주도한 전략가", "explain":"자기 통제력이 강한편이며 전략을 계획하고 설계하는것은 좋아한다. INTP의 자유분방함과 반대되는 성향을 가지며 질서있고 체계적인것을 선호하는 편이다. 또한, 합리적으로 문제를 해결하려고 한다.", "img":"image/amongusJAMONG.png"},
    "INFP" : {"title":"INFP", "subctx":"열정적인 중재자", "explain":"대부분 이상적이며 부드러운 성향을 가진다. 타인과의 갈등을 피하려하며 상대방을 이해하려는 노력하지만 자신이 가진 성향 때문에 상처를 입기도 한다. 이러한 성향 때문에 타인에게는 정서적인 안정감을 주지만 본인의 정서는 불안정할 수 있다. ", "img":"image/amongusLIME.png"},
    "INFJ" : {"title":"INFJ", "subctx":"통찰력 있는 선지자", "explain":"인내심이 강하며 주위에 대한 통찰력이 뛰어나다. 또한 독창성과 독립심이 강하며 자신만의 신념을 가지고 있으며 나무보다는 숲을 보려는 성향을 가진다.", "img":"image/amongusMINT.png"},
    // ES**
    "ESTP" : {"title":"ESTP", "subctx":"모험을 즐기는 사업가", "explain":"개방적인 성격을 가지며 어느곳에서든 금방 적응을 잘하며 주변 사람들과 어울리는 것을 좋아한다. 또한 현실적이며 추상적인 것에 대해서는 관심을 가지지 않는 편이다.", "img":"image/amongusNAVY.png"},
    "ESTJ" : {"title":"ESTJ", "subctx":"엄격한 관리자,", "explain":"실질적이고 현실적이며 주도적으로 일을 계획하여 추진시키는 지도력이 있다. 그렇기때문에 조직을 관리하는데 재능을 보이는 경우가 많다. 하지만 속단속결하는 성향 때문에 타인의 감정을 이해하는 능력은 다소 부족하다.", "img":"image/amongusORANEGE.png"},
    "ESFP" : {"title":"ESFP", "subctx":"자유로운 영혼의 연예인,", "explain":"사교적이고 낙천적인 성향을 보인다. 자신의 주변사람이나 일어나는 사건에 대해 관심이 많으며 사교적인 성향으로 인해 밝은 분위기를 조성해주기도 한다. ESTP와 비슷하지만 충동적인 성향이 조금 더 많다.", "img":"image/amongusPINK.png"},
    "ESFJ" : {"title":"ESFJ", "subctx":"사교적인 외교관", "explain":"다른 사람에게 관심과 주의를 가지며 자신의 도움이 필요하면 기꺼이 나서 도와주려 한다. 이러한 성향 때문에 타인에게 상처가 되는 말은 하지 않으려고 하며 인간관계에 대한 문제에서는 냉정하게 판단하기 어려워한다.", "img":"image/amongusPURPLE.png"},
    // EN**
    "ENTP" : {"title":"ENTP", "subctx":"뜨거운 논쟁을 즐기는 변론가", "explain":"자신이 원하는것을 실현하고 싶어하며 험난한 길이라도 도전하려 한다. 변화를 추구하는 성향이 크기 때문에 질서가 엄격한 것에는 관심조차 가지지 않는다. 이러한 성향 때문에 자신이 원하는 것에 대해 금방 실증을 느끼기도하며 늘 새로운것을 갈망하기도 한다.", "img":"image/amongusRED.png"},
    "ENTJ" : {"title":"ENTJ", "subctx":"대담한 통솔자", "explain":"자기 주장이 강하고 단호한 편이라서 ESTJ처럼 지도력과 통송력이 있는 성향을 가진다. 또한 일을 처리하는데 있어서 철저하게 논리적,분석적으로 계획하여 진행하는 스타일이다. 하지만 자기 주장이 강한 성향 때문에 타인의 의견을 존중하지 않는 경우가 생기기도 한다.", "img":"image/amongusSKYBLUE.png"},
    "ENFP" : {"title":"ENFP", "subctx":"재기발랄한 활동가", "explain":"외향적인 성격이고 열정적이며 활기가 넘치는 편이다. 또한 틀에 박히고 반복되는 일보다 창의적이고 새로운 것에 흥미를 더 느끼는 스타일이다. 즉, 본인이 관심이 있는 일이면 주저없이 뛰어들고보는 성격이다.", "img":"image/amongusWHITE.png"},
    "ENFJ" : {"title":"ENFJ", "subctx":"정의로운 사회운동가", "explain":"강한 책임감을 가지고 주변에 대한 동정심이 많다. 타인의 의견에 관심을 가지며 대체로 그 의견을 지지해주는 편이다. 또한 상대방과의 대화를 적극적으로 이끌어 나가려하며 상대가 불편해할 수 있는 말은 꺼내려하지 않는다. 상대에게 가장 부드럽게 말을하는 스타일이다.", "img":"image/amongusYELLOW.png"}
}   
var pointNum = 1 ;
$("#a-btn").click(function (){
    var finderVal = $("#finder").val();
    var preVal =  $("#"+finderVal).val();
    $("#"+finderVal).val(parseInt(preVal)+1);
    passPage();
});
$("#b-btn").click(function(){
    passPage();
});
function passPage() {
    if (pointNum == 13) {
        $("#qs-wrap").hide();
        $("#res-wrap").show();
        $("#side-banner").show();
        $("#bottom-banner").hide();
        var finalRes = "";
        ($("#EI").val() < 2) ? finalRes = finalRes += "I" : finalRes = finalRes += "E" ;
        ($("#SN").val() < 2) ? finalRes = finalRes += "N" : finalRes = finalRes += "S" ;
        ($("#FT").val() < 2) ? finalRes = finalRes += "T" : finalRes = finalRes += "F" ;
        ($("#JP").val() < 2) ? finalRes = finalRes += "P" : finalRes = finalRes += "J" ;

        $("#resb-img").attr("src",resMBTI[finalRes]["img"]);
        $("#resb-ctx").html(resMBTI[finalRes]["title"]);
        $("#resb-msg").html(resMBTI[finalRes]["explain"]);
        $("#resb-sub-ctx").html(resMBTI[finalRes]["subctx"]);
    } else {
        $(".progress-bar").attr("style","width: calc(100/12*"+pointNum+"%)");
        $("#qsb-ctx").html(question[pointNum]["title"]);
        $("#a-btn").html(question[pointNum]["a-btnTxt"]);
        $("#b-btn").html(question[pointNum]["b-btnTxt"]);
        $("#finder").val(question[pointNum]["type"]);
        pointNum++;
    }
}
function openPage() {
    $("#start-box").hide();
    $("#side-banner").hide();
    $("#qs-wrap").show();
    $("#bottom-banner").show();
    passPage();
}