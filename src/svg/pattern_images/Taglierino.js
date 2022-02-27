import * as React from "react";

function SvgTaglierino({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={17.251} height={51.916} viewBox="0 0 17.251 51.916" {...props}>
      <path
        d="M5.588 11.357L4.058 29.14a36.23 36.23 0 01-2.447 10.257L.51 42.148A6.975 6.975 0 000 44.801c0 3.915 3.201 7.115 7.137 7.115a7.103 7.103 0 004.017-1.264l.612-.427a12.752 12.752 0 005.486-10.461V11.357h-4.977v15.086c.289.185.255.143.409.295.048.047.092.099.14.147.537.07.93.253 1.186.5V13.092h1.53v26.691c0 3.61-1.756 6.974-4.733 9.033l-.612.43a5.306 5.306 0 01-3.037.957c-2.59 0-5.404-2.058-5.404-5.402 0-.694.122-1.368.387-2l1.101-2.752A38.401 38.401 0 005.791 29.28l1.387-16.21v.02h1.08v15.462l.006-.018c.026-.253.072-.405.213-.68a.63.63 0 01.123-.177c.146-.137.313-.248.464-.38l-.173.106c.074-.048.287-.205.222-.144-.015.014-.033.025-.049.039.06-.036.12-.07.178-.106l-.035.012a.382.382 0 01.063-.03l-.028.018c.139-.055.277-.1.41-.148.048-.045.084-.101.139-.139l.064-.039c.01-.01.018-.023.028-.033.034-.036.072-.068.11-.102V11.357zm6.687 15.2v.084c.027.063.044.13.069.195l.138.012c-.07-.097-.137-.195-.207-.291zm1.735 2.779l-.06.047.003.013.057-.04zm0 .12l-.031.032c0 .005.002.01.003.014.006.02.002.041.002.062.003.09-.007.18-.011.27.017.05.026.083.037.12zm-.114.134l.036.111c-.004-.013 0-.016-.004-.031-.008-.028-.02-.054-.032-.08zM8.33 30.613c.004.048.01.094.02.131.024.04.03.057.068.12-.025-.082-.042-.123-.088-.25zm.088.25l.004.014c.003.004.025.037.02.027l-.024-.04zm.004.014a.473.473 0 01-.068-.102c-.004-.007-.002-.022-.004-.03l-.05-.085.03.11c-.015-.045-.045-.097-.072-.147v8.162a2.872 2.872 0 002.875 2.875 2.873 2.873 0 002.877-2.875V31.35c-.058.209-.159.313-.393.658-.385.302-.184.171-.586.37.008-.002.118-.052.088-.04-.047.019-.094.058-.14.088a1.815 1.815 0 01-.704.3v6.038a1.141 1.141 0 11-2.283 0v-6.325a1.994 1.994 0 01-.344-.171c.013.008.019.012.028.02a.641.641 0 01-.074-.046l.046.026c-.04-.027-.042-.033-.087-.061-.049-.02.007.004-.053-.021l.004.003c.01.01-.013-.004-.037-.015l-.014-.006-.002-.002h-.002c-.061-.048-.237-.164-.17-.137.046.019.084.052.129.072a21.833 21.833 0 00-.19-.173c-.275.657-.327-.055-.423-.354-.05-.06-.093-.11-.094-.113l-.002-.002c-.115-.091-.212-.34-.285-.582zm.38.697c.035.043.046.055.067.078-.002-.006-.038-.042-.02-.029.136.09.257.196.378.305.014-.034.025-.048.04-.09-.235-.156-.381-.246-.482-.313a.561.561 0 01.018.05z"
        fill={currentColor}
      />
      <path
        fill={currentColor}
        d="M13.764 12.194V5.791L8.707 2.936v9.258H6.974V0l8.503 4.772v7.422zM11.052 33.952a4.325 4.325 0 01-4.323-4.323 4.325 4.325 0 014.323-4.323 4.325 4.325 0 014.323 4.323c-.02 2.406-1.957 4.323-4.323 4.323zm0-6.893a2.593 2.593 0 00-2.59 2.59 2.593 2.593 0 002.59 2.59 2.593 2.593 0 002.59-2.59 2.593 2.593 0 00-2.59-2.59z"
      />
    </svg>
  );
}

export default SvgTaglierino;