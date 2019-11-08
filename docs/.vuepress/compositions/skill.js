import { reactive, toRefs } from '@vue/composition-api'

export function useMySkillData() {

  const skills = reactive([
    'TypeScript',
    'JavaScript',
    'node.js',
    'npm',
    'Vue.js',
    'Nuxt.js',
    'Rx.js',
    'express.js',
    'GraphQL',
    'Apollo GraphQL',
    'micro-services',
    'moleculer',
    'MySQL',
    'MongoDB',
    'Redis',
    'git',
    'gitlab',
    'github',
    'GCP',
    'GCE',
    'GKE',
    'docker',
    'drone',
    'gitlab-ci',
    'react.js',
    'angular'
  ])

  return toRefs(skills);

}