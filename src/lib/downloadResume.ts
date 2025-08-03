import { toast } from 'sonner';

export const downloadResume = async () => {
  try {
    const response = await fetch('/resume/resume.pdf');
    if (!response.ok) {
      throw new Error('Resume file not found');
    }
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Huynh-Van-Phuot_Resume_Software-Engineer.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Downloaded successfully!", {
      description: "Thank you for your interest!",
      duration: 3000,
    })
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : 'Oops, something went wrong 😢',
      {
        description: 'Please try again or contact me directly!',
        duration: 2000,
      }
    );
  }
};
