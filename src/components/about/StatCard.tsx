import "./StatCard.scss";

interface StatCardProps {
    number: string;
    title: string;
}

const StatCard = ({ number, title }: StatCardProps) => {
    return (
        <div className="stat-card">
            <h3>{number}</h3>
            <span>{title}</span>
        </div>
    );
};

export default StatCard;