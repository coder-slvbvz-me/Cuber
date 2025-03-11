import { SVGProps } from '@/types/SVGProps';

const UserProfile = ({ className }: SVGProps) => {
    return (
            <svg width="30" height="30" viewBox="0 0 14 14" fill="none" className={className}>
                <g opacity="0.8" clipPath="url(#clip0_76_638)">
                    <path d="M7 7C7.9665 7 8.75 6.2165 8.75 5.25C8.75 4.2835 7.9665 3.5 7 3.5C6.0335 3.5 5.25 4.2835 5.25 5.25C5.25 6.2165 6.0335 7 7 7Z" stroke="#1C274C" strokeWidth="0.875"/>
                    <path d="M7.00002 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 6.99999C12.8334 3.77833 10.2217 1.16666 7.00002 1.16666C3.77836 1.16666 1.16669 3.77833 1.16669 6.99999C1.16669 10.2217 3.77836 12.8333 7.00002 12.8333Z" stroke="#1C274C" strokeWidth="0.875"/>
                    <path d="M10.482 11.6667C10.3892 9.97996 9.8728 8.75 7 8.75C4.12727 8.75 3.61084 9.97996 3.51801 11.6667" stroke="#1C274C" strokeWidth="0.875" strokeLinecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_76_638">
                        <rect width="14" height="14" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
    );
};

export default UserProfile;
