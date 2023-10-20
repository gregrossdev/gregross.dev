import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', () => {
  const activeArticle = ref(null);
  function setActiveArticle(article) {
    activeArticle.value = article;
  }

  return { activeArticle, setActiveArticle }
});