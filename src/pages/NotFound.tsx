import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-8xl font-bold text-primary-foreground mb-4 fade-in">404</h1>
        <h2 className="text-3xl font-bold text-primary-foreground mb-4 fade-in fade-in-delay-1">Page Not Found</h2>
        <p className="text-xl text-primary-foreground/80 mb-8 fade-in fade-in-delay-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-3">
          <Link to="/" className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground">
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
