export const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-primary glow-text">MR SMILE MODDERS</h3>
          <p className="text-muted-foreground mt-2">Professional WhatsApp Recovery Services</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 MR SMILE MODDERS. All rights reserved.</p>
          <span className="hidden sm:block">•</span>
          <p>Developed with 💚 by MR SMILE</p>
        </div>
      </div>
    </footer>
  );
};