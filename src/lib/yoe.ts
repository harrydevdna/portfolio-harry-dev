export default function getYearOfExperiences() {
  const startDate = new Date('2023-09-05');
  const now = new Date();

  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  const totalMonths = years * 12 + months;

  const experience = totalMonths / 12;
  const fullYears = Math.floor(experience);
  const fraction = experience - fullYears;

  if (fraction <= 0.5) {
    return `over ${fullYears} years`; 
  } else {
    return `nearly ${fullYears + 1} years`
  }
}