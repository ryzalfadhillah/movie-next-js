import React from "react";

export default function IconNowPlaying({
    width = 20,
    height = 20,
    color = "#404040",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <g clipPath="url(#clip0_2999_2702)">
                <path
                d="M5.68378 0.759696C5.89191 0.892742 6.10223 1.02214 6.31275 1.15136C6.35137 1.17508 6.39 1.19881 6.4298 1.22325C6.50884 1.27179 6.58788 1.32031 6.66694 1.36882C6.85879 1.4866 7.05048 1.60463 7.24219 1.72265C7.47274 1.86454 7.70331 2.00642 7.93392 2.14823C8.31352 2.38169 8.6929 2.6155 9.07171 2.85024C9.46911 3.0964 9.86743 3.34107 10.2656 3.58593C10.7235 3.86747 11.1812 4.14915 11.6381 4.43227C12.0355 4.67843 12.4338 4.9231 12.832 5.16796C13.7507 5.73288 13.7507 5.73288 14.2034 6.01368C14.3748 6.11993 14.5465 6.22569 14.7185 6.331C14.7592 6.35595 14.7999 6.3809 14.8406 6.40584C14.9183 6.45349 14.9961 6.50104 15.0739 6.54853C15.8206 7.00627 16.4103 7.44393 16.6992 8.29687C16.7082 8.32243 16.7172 8.34799 16.7264 8.37432C16.8961 8.93991 16.7996 9.56411 16.5586 10.0898C16.5364 10.1391 16.5364 10.1391 16.5138 10.1894C16.2119 10.7994 15.6554 11.1303 15.091 11.4679C14.9831 11.5325 14.8755 11.5976 14.7678 11.6625C14.7357 11.6819 14.7357 11.6819 14.7029 11.7016C14.5178 11.8132 14.3339 11.9268 14.1504 12.041C13.8433 12.232 13.5343 12.4198 13.225 12.6071C12.9584 12.7687 12.6925 12.9311 12.4277 13.0957C12.1206 13.2866 11.8117 13.4745 11.5024 13.6618C11.2358 13.8234 10.9698 13.9858 10.7051 14.1504C10.3981 14.3413 10.0892 14.5291 9.77999 14.7163C9.50738 14.8815 9.23553 15.0478 8.96485 15.2161C8.7191 15.3688 8.47235 15.5196 8.22437 15.6687C8.19484 15.6865 8.16532 15.7043 8.1349 15.7226C8.10746 15.739 8.08002 15.7554 8.05175 15.7724C8.02772 15.7868 8.0037 15.8012 7.97895 15.816C7.75616 15.9438 7.56908 15.9552 7.3125 15.9258C7.10397 15.8514 6.95689 15.6985 6.85547 15.5039C6.78208 15.2649 6.81197 15.0707 6.90615 14.8455C7.07747 14.5956 7.36018 14.4557 7.61573 14.3064C7.69508 14.2594 7.77441 14.2124 7.85372 14.1654C7.89308 14.142 7.93245 14.1187 7.97301 14.0947C8.1327 13.9994 8.29071 13.9016 8.44849 13.8032C8.73656 13.6239 9.02618 13.4473 9.31641 13.2715C9.60437 13.0971 9.89181 12.9219 10.1777 12.7441C10.4849 12.5532 10.7938 12.3654 11.1031 12.178C11.3697 12.0165 11.6357 11.854 11.9004 11.6894C12.1863 11.5117 12.4738 11.3365 12.7617 11.1621C13.0828 10.9676 13.4031 10.772 13.7217 10.5736C13.8838 10.4728 14.0465 10.3732 14.21 10.2748C14.2466 10.2528 14.2832 10.2307 14.3208 10.208C14.3913 10.1656 14.4618 10.1233 14.5323 10.0812C14.6702 9.99814 14.8028 9.91701 14.9251 9.81188C15.0117 9.73827 15.0117 9.73827 15.082 9.73827C15.1055 9.69142 15.1289 9.64454 15.1523 9.59765C15.1644 9.57395 15.1764 9.55024 15.1887 9.52582C15.3155 9.26126 15.3642 9.0178 15.2873 8.73014C15.1135 8.24898 14.7149 8.05764 14.2964 7.80696C14.1876 7.7418 14.0791 7.67622 13.9706 7.61063C13.9487 7.59737 13.9267 7.58412 13.9041 7.57046C13.6941 7.44337 13.4859 7.31345 13.2781 7.18285C12.9719 6.99056 12.664 6.80126 12.3548 6.61372C12.1043 6.46169 11.8549 6.30803 11.6059 6.15355C11.3587 6.00022 11.1111 5.84766 10.8633 5.6953C10.5876 5.5258 10.3122 5.35601 10.0371 5.18554C9.61 4.92086 9.18194 4.65772 8.75391 4.39452C8.29606 4.11298 7.8383 3.8313 7.38143 3.54818C6.98403 3.30202 6.58571 3.05735 6.1875 2.81249C6.03149 2.71656 5.87549 2.62061 5.71949 2.52465C5.68165 2.50139 5.64381 2.47812 5.60482 2.45416C5.42603 2.34417 5.24741 2.23394 5.06923 2.12296C4.31674 1.61049 4.31674 1.61049 3.44532 1.47655C3.19348 1.54089 2.96725 1.69184 2.82981 1.91367C2.71181 2.14057 2.66751 2.32632 2.66736 2.58265C2.66719 2.65195 2.66719 2.65195 2.66701 2.72265C2.66706 2.77387 2.66712 2.82509 2.66718 2.8763C2.66711 2.93076 2.66703 2.98521 2.66694 3.03966C2.66672 3.18936 2.66673 3.33907 2.66677 3.48878C2.66677 3.65021 2.66658 3.81164 2.66641 3.97307C2.66612 4.28938 2.66602 4.6057 2.66601 4.92201C2.66599 5.17913 2.66592 5.43624 2.6658 5.69335C2.6655 6.4222 2.66533 7.15105 2.66536 7.8799C2.66536 7.93886 2.66536 7.93886 2.66536 7.999C2.66537 8.05802 2.66537 8.05802 2.66537 8.11824C2.66538 8.75593 2.66505 9.39362 2.66455 10.0313C2.66405 10.686 2.6638 11.3406 2.66383 11.9953C2.66384 12.3629 2.66375 12.7305 2.66337 13.0981C2.66305 13.4111 2.66297 13.724 2.66321 14.037C2.66333 14.1967 2.66333 14.3564 2.66302 14.5161C2.66275 14.6623 2.6628 14.8086 2.6631 14.9548C2.66316 15.0076 2.66309 15.0605 2.6629 15.1133C2.66132 15.5701 2.70085 15.9051 2.99488 16.2663C3.23802 16.4663 3.46498 16.5544 3.78191 16.5436C3.96079 16.5136 4.11077 16.4367 4.27396 16.36C4.47815 16.2795 4.6814 16.2678 4.89112 16.3372C5.08205 16.4343 5.22828 16.6076 5.3086 16.8047C5.34009 17.0643 5.33032 17.2645 5.16797 17.4726C4.92437 17.7638 4.44647 17.94 4.07813 18C3.95197 18.0101 3.82672 18.0117 3.7002 18.011C3.66597 18.0108 3.63174 18.0107 3.59648 18.0105C3.34567 18.0066 3.1202 17.9794 2.88282 17.8945C2.83965 17.8811 2.83965 17.8811 2.79561 17.8673C2.19802 17.6602 1.7475 17.1867 1.46118 16.6374C1.21589 16.1249 1.18997 15.6279 1.19061 15.0688C1.19055 15.0144 1.19047 14.9599 1.19037 14.9054C1.19016 14.7565 1.19016 14.6076 1.1902 14.4587C1.19021 14.2979 1.19002 14.137 1.18985 13.9761C1.18956 13.6612 1.18946 13.3462 1.18944 13.0313C1.18943 12.7752 1.18935 12.5191 1.18924 12.263C1.18893 11.5363 1.18877 10.8095 1.1888 10.0828C1.1888 10.0436 1.1888 10.0045 1.1888 9.96415C1.1888 9.92496 1.1888 9.88576 1.18881 9.84538C1.18882 9.21035 1.18848 8.57531 1.18799 7.94028C1.18748 7.28759 1.18724 6.6349 1.18727 5.98221C1.18728 5.61604 1.18719 5.24986 1.18681 4.88369C1.18649 4.57189 1.18641 4.2601 1.18665 3.9483C1.18676 3.78939 1.18677 3.63047 1.18646 3.47155C1.18618 3.32575 1.18624 3.17996 1.18654 3.03416C1.18659 2.98173 1.18653 2.9293 1.18633 2.87688C1.1836 2.09773 1.29529 1.37283 1.85065 0.785789C3.04503 -0.40464 4.40831 -0.0571426 5.68378 0.759696Z"
                fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_2999_2702">
                <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
