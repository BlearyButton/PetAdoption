<template>
  <div class="bg-gray-200 overflow-hidden">
        <a href="quizstart"><div class="flex flex-row mt-8 ml-8 items-center">
        <img class="h-4" src="../assets/images/adopt/arrowleft.png"/>
        <div class="ml-2 text-lightgray font-bold font-poppins">BACK</div>
    </div></a>
    <div class="flex flex-col items-center justify-center place-self-center h-screen relative" v-if="quiz">
      <template v-for="(question, index) in quiz.quiz_questions">
        <div class="flex flex-col items-center" v-if="currentQuestion === index">
          <p class="font-poppins font-extrabold text-4xl my-12 ">{{question.question}}</p>
          <div class="flex flex-col font-poppins content-start ">
            <template v-for="(answer, answerIndex) in question.quiz_answers">
              <button class="my-2 bg-gray-100 py-4 rounded-lg px-48 hover:bg-gray-200 hover:drop-shadow-md focus:bg-gray-200 " @click="() => setAnswer(answerIndex)">
                {{answer.answer}}
              </button>
            </template>
          </div>
        </div>
      </template>
      <button class="text-center font-poppins text-md bg-darkorange text-white rounded-lg px-8 py-3 mt-24 " :disabled="!canGoToNextQuestion" @click="goToNextQuestion">Go to next question</button>
    </div>
    </div>
  </template>
<script setup>
import supabase from '../lib/supabase';
  const loading = ref(true)
  const quiz = ref(null);
  const currentQuestion = ref(0);
  const answers = ref({})

  const setAnswer = (answerIndex) => {
    answers.value[currentQuestion.value] = answerIndex;
  }

  const goToNextQuestion = () => {
    currentQuestion.value = currentQuestion.value + 1;
  }

  const canGoToNextQuestion = computed(() => {
    return answers.value[currentQuestion.value];
  })


  loading.value = true;
  let { data } = await supabase
      .from('quizes')
      .select(`
        name,
        quiz_questions (
          question,
          quiz_answers (
            answer
          )
        )
      `)
      .single()
  if (data) {
    quiz.value = data;
    console.log(quiz.value);
  }
  
  loading.value = false;

</script>
