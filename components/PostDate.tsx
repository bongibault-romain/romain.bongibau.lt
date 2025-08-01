export default function PostDate({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  
  const formatDate = (date: Date): string => {
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "écembre"
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${day} ${month}, ${year}`;
  };

  return <time dateTime={dateString}>{formatDate(date)}</time>;
}
