words=[
    {
        question:'make smaller or less in amount, degree, or size',
        correct:'reduce'
    },{
        question:'(of organic matter) rot or decompose through the action of bacteria and fungi.',
        correct:'decay'
    },{
        question:"clean or dry (something) by rubbing with a cloth, a piece of paper, or one's hand.",
        correct:'wipe'
    }
    ];

wordIndex = 0;
wordsLength = words.length; 

setupWord = () =>{
document.getElementById('js-question').textContent = words[wordIndex].question;
document.getElementById('answer').value = '';
}

setupWord();


document.getElementById('sub').addEventListener('click', ()=>{
    let answerValue = document.getElementById('answer').value;
    let score =0;
    if(answerValue === words[wordIndex].correct){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解');
        }
       
        wordIndex++;
        
     if(wordIndex < wordsLength){
         setupWord();
         
     }else{
         window.alert('finish!');
         document.getElementById('js-question').textContent ='あなたのスコアは'+score+'/'+wordsLength+'です！' ;
     }
    
});
