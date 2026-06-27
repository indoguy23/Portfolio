import { motion } from "framer-motion";
import "./SkillCard.scss";

interface SkillCardProps {
    name: string;
    icon: React.ReactNode;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
    return (
        <motion.div
            className="skill-card"
            whileHover={{
                y: -8,
                scale: 1.04,
            }}
            transition={{
                duration: 0.3,
            }}
        >
            <div className="skill-card__icon">
                {icon}
            </div>

            <h3 className="skill-card__title">
                {name}
            </h3>
        </motion.div>
    );
};

export default SkillCard;