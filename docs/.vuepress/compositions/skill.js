import { reactive, toRefs } from '@vue/composition-api'

export function useMySkillData() {

  const skills = reactive([
    ['TypeScript', '#007acc', '#ffffff'],
    ['JavaScript', '#f0db4f', '#323330'],
    ['Node.js', '#3c873a', '#ffffff'],
    ['npm', '#cb3837', '#ffffff'],
    ['Vue.js', '#42b883', '#35495e'],
    ['Nuxt.js', '#41b883', '#35495e'],
    ['Rx.js', '#e7007f', '#ffffff'],
    ['Express.js', '#3c873a', '#ffffff'],
    ['GraphQL', '#e535ab', '#ffffff'],
    ['Apollo GraphQL', '#1ebcb1', '#ffffff'],
    ['Microservice', '#000000', '#ffffff'],
    ['Moleculer', '#553c7d', '#ffffff'],
    ['MySQL', '#0a4b73', '#ffffff'],
    ['TypeORM', '#007acc', '#ffffff'],
    ['MongoDB', '#8DAD6C', '#FFFFFF'],
    ['Redis', '#D82C20', '#ffffff'],
    ['Git', '#F1502F', '#ffffff'],
    ['GitLab', '#FC6D27', '#ffffff'],
    ['GitHub', '#211F1F', '#F4CBB2'],
    ['GCP', '#0096EF', '#ffffff'],
    ['GCE', '#0096EF', '#ffffff'],
    ['GKE', '#0096EF', '#ffffff'],
    ['Docker', '#049cec', '#ffffff'],
    // ['drone', 'yellow', 'black'],
    ['Gitlab CI', '#FC6D27', '#ffffff'],
    ['React.js', '#61DBFB', '##20232a'],
    ['Angular', '#a6120d', '#ffffff'],
  ])

  return toRefs(skills);

}