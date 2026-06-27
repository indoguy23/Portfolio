import './ProfileCard.scss';
import profile from '../../assets/images/Profile.jpeg';
import { motion } from "framer-motion";

const ProfileCard = () => {
    return (
        <motion.div
            className="profile-card"
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div className="profile-card__image">
                <img src={profile} alt="Aryan Dewangan" />
            </div>

            <h3>Aryan Dewangan</h3>
        </motion.div>
    );
};

export default ProfileCard;