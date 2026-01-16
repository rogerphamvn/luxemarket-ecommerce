import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="card card-dark p-8 text-center card-hover group">
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-sage-light/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-sage-light">
                        {icon}
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
