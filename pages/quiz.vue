<template>
    <div v-if="quiz">
      <template v-for="(question, index) in quiz.quiz_questions">
        <div v-if="currentQuestion === index">
          <p>{{question.question}}</p>
          <div class="flex flex-col">
            <template v-for="(answer, answerIndex) in question.quiz_answers">
              <button @click="() => setAnswer(answerIndex)">
                {{answer.answer}}
              </button>
            </template>
          </div>
        </div>
      </template>
      <button :disabled="!canGoToNextQuestion" @click="goToNextQuestion">Go to next question</button>
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
