import PublicIcon from '@mui/icons-material/Public';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LayersIcon from '@mui/icons-material/Layers';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats">
      <div className="stat-item">
        <PublicIcon className="stat-icon" />
        <span>Supplying India</span>
      </div>

      <div className="stat-item">
        <EventIcon className="stat-icon" />
        <span>Established 2021</span>
      </div>

      <div className="stat-item">
        <MenuBookIcon className="stat-icon" />
        <span>50+ recipes</span>
      </div>

      <div className="stat-item">
        <LayersIcon className="stat-icon" />
        <span>Multi-application</span>
      </div>
    </section>
  );
}