export type Member = {
    userId: string;
    name: string;
    designation: 'Vice-President' | 'General Secretary' | 'Joint Secretary' | 'Treasurer' | 'Member';
    bio: string;
    atchievements: string[];
    email: string;
    phone: string;
    photoUrl?: string;
};