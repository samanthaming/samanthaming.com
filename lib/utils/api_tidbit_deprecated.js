export async function REFdispatchRecentLesson({
  content,
  store,
  recentName,
  contentPath,
  dispatchType,
  fetchRecentFunction,
}) {
  if (store.getters[recentName]) {
    return;
  }

  const recent = await fetchRecentFunction({ content, contentPath });

  store.dispatch(dispatchType, recent);
  return recent;
}
