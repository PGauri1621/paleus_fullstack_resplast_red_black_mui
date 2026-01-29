import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import '../styles/DiscussCTA.css';

export default function DiscussCTA() {
  return (
    <section className="discuss-cta">
      <div className="discuss-inner">
        <h2>
          Do you have an acrylic polymer emulsion or PSA requirement that you
          would like to discuss?
        </h2>

        <button className="discuss-btn">
          Get in touch with us
          <ChatBubbleOutlineIcon className="discuss-icon" />
        </button>
      </div>
    </section>
  );
}