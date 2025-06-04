import { useParams } from 'react-router-dom';
import DomainHeader from '../components/Header';
import DomainHero from '../components/Domain/DomainHero';
import DomainMembers from '../components/Domain/DomainMembers';


const DomainTeam = () => {
  const { domain } = useParams();  // Gets domain from URL (e.g., /team/web-development)

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen mt-16">
      <DomainHeader domain={domain} />
      <main>
        <DomainHero domain={domain} />
        <DomainMembers domain={domain} />
      </main>
      
    </div>
  );
};

export default DomainTeam;