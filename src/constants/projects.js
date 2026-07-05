const PROJECT_PHOTO_COUNT = 33;

export const PROJECT_GALLERY = Array.from({ length: PROJECT_PHOTO_COUNT }, (_, index) => {
  const number = index + 1;
  return {
    id: `project-${number}`,
    image: `/images/projects/project-${number}.webp`,
  };
});
