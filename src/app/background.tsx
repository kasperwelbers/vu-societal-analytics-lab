interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {
  const bgTo = `from-[hsl(0,0%,calc(100%-var(--scrollPct)))]`;
  const bgFrom = `to-[hsl(25,80%,calc(100%-var(--scrollPct)/1.1))]`;

  const skylineTranslate = "translate-y-[calc(var(--scrollVh)/3)]";

  const traceOpacity = "opacity-[calc(var(--scrollPct)*3-200%)]";
  const traceTranslate =
    "-translate-y-[max(-20%,calc(var(--scrollPct)/2-35%))] translate-x-[max(0%,calc(var(--scrollPct)/4-17%))] scale-[calc(100%-var(--scrollPct)/10)]";

  return (
    <div className="relative h-full flex flex-col w-full z-0">
      <div className={`fixed inset-0 bg-gradient-to-t ${bgFrom} ${bgTo}`}></div>
      <div className="fixed left-0 right-0 flex flex-col overflow-visible z-40">
        <div
          className={`transition-transform ${skylineTranslate} relative flex w-[100%] flex-col bg-gradient-to-t from-slate-400 to-transparent`}
        >
          <div className="relative w-full max-w-[800px] ml-auto ">
            <Logo className="relative fill-secondary w-full translate-y-[20px] z-40" />
            <div
              className={`transition-all absolute w-full top-0 left-0 -z-10 ${traceOpacity} ${traceTranslate} `}
            >
              <Logo className="w-full h-full fill-primary translate-y-[2] " />
              <div className="relative h-10 z-0 bg-primary" />
            </div>
          </div>
          <div className="bg-secondary h-[2000px]" />
        </div>
      </div>
      <div className="relative pt-[0vh]">
        <div className="relative z-50">
          <div className="mt-[clamp(7rem,24vw,14rem)] relative z-50  text-white  p-8 text-center font-bold text-4xl md:text-5xl lg:text-6xl text-balance ">
            <h2
              className="relative  leading-normal"
              style={{ textShadow: "2px 2px 2px #0004" }}
            >
              In a digital society
              <br />
              behavior leaves a trace
            </h2>
          </div>{" "}
        </div>
        <div className="relative z-10 pb-[60vh] lg:pb-[55vh] pt-[40vh] text-white  p-8 text-right font-bold text-4xl md:text-5xl lg:text-6xl text-balance ">
          <h2
            className="leading-normal "
            style={{ textShadow: "2px 2px 2px #fff4" }}
          >
            Let's use these traces
            <br />
            to benefit society!
          </h2>
        </div>
      </div>
    </div>
  );
}

function Logo({ className }: { className: string }) {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0.0 0.0 414.4173228346457 100.0"
      stroke="none"
      strokeLinecap="square"
      strokeMiterlimit="10"
    >
      <clipPath id="p.0">
        <path
          d="m0 0l414.41733 0l0 100.0l-414.41733 0l0 -100.0z"
          clipRule="nonzero"
        />
      </clipPath>
      <g clipPath="url(#p.0)">
        <path
          fill="#000000"
          fillOpacity="0.0"
          d="m0 0l414.41733 0l0 100.0l-414.41733 0z"
          fillRule="evenodd"
        />
        <path
          d="m102.86266 12.233753c-0.04372406 0 -0.09327698 0.011790276 -0.14574432 0.035369873c-0.22736359 0.10493088 -0.32501984 0.34191036 -0.19530487 0.499897c0.15595245 0.20750427 0.28858185 0.30889893 0.3862381 0.30889893c0.12680054 0 0.19966888 -0.16741848 0.19966888 -0.4928236c0 -0.22283077 -0.096191406 -0.3513422 -0.24485779 -0.3513422zm-0.4955368 1.5845795c-0.52469635 0 -0.91384125 1.0398798 -0.7564316 2.05618c0.065582275 0.525836 -0.19530487 0.6838217 -1.268013 0.7628145c-1.1062241 0.104932785 -1.2694626 0.18392563 -0.8467941 0.57889175c0.26088715 0.26291656 0.8788605 0.47395897 1.3991776 0.47395897c0.5203247 0 1.0727081 0.15798569 1.2359467 0.3419094c0.10347748 0.16859818 0.27108765 0.2523079 0.4168396 0.2523079c0.03643799 0 0.07141876 -0.004716873 0.10347748 -0.015327454c0.12971497 -0.07899284 0.84534454 -0.34191132 1.59449 -0.57888985c0.779747 -0.29003525 1.3015289 -0.7109394 1.3015289 -1.0528507c0 -0.37256432 -0.20404816 -0.5800686 -0.45764923 -0.5800686c-0.17636108 0 -0.37748718 0.10139465 -0.5509262 0.31715202c-0.1778183 0.22401047 -0.35271454 0.32894135 -0.50429535 0.32894135c-0.2929535 0 -0.5042877 -0.39024925 -0.5042877 -1.0658188c-0.03351593 -1.1577797 -0.3250122 -1.6836157 -1.1062241 -1.8156633c-0.018951416 -0.0023584366 -0.037895203 -0.003537178 -0.05683899 -0.003537178zm-34.228928 21.97543c0.22736359 0 0.42266846 0.13204956 0.42266846 0.31597137c0 0.18392563 -0.09764862 0.34191132 -0.19530487 0.34191132c-0.09764862 0 -0.2929535 -0.15798569 -0.42266846 -0.34191132c-0.12971497 -0.18392181 -0.065582275 -0.31597137 0.19530487 -0.31597137zm183.18924 17.70744c-0.06413269 0 -0.11367798 0.26292038 -0.11367798 0.7132988c0 0.44094467 0.048095703 0.7026863 0.109313965 0.7026863c0.027679443 0 0.05683899 -0.048339844 0.08598328 -0.15091324c0.09765625 -0.3159752 0.09765625 -0.8158722 0 -1.1306648c-0.027694702 -0.09196091 -0.05683899 -0.13440704 -0.08161926 -0.13440704zm4.9335785 -7.815609c-0.0014648438 0 -0.0029296875 0 -0.0058288574 0.0023612976c-0.12973022 0.07899094 -0.32502747 2.447609 -0.45474243 5.237129c-0.16323853 2.7883415 -0.3250122 5.2890053 -0.42266846 5.5259857c-0.09765625 0.23697662 -0.09765625 0.57888794 0.032073975 0.7368736c0.13407898 0.17567444 0.25068665 0.2723503 0.34979248 0.2723503c0.40664673 0 0.54800415 -1.6046219 0.626709 -5.9563217c0.032073975 -3.22575 -0.03060913 -5.8183784 -0.1253357 -5.8183784zm-4.929199 10.364613c-0.052474976 0 -0.085998535 0.40439987 -0.085998535 1.1106224c0 0.7074013 0.03352356 1.1117973 0.085998535 1.1117973c0.02331543 0 0.048095703 -0.070739746 0.07723999 -0.2169342c0.09765625 -0.47396088 0.09765625 -1.2898293 0 -1.7897263c-0.029144287 -0.14619827 -0.05392456 -0.21575928 -0.07723999 -0.21575928zm-0.023330688 3.234005c-0.07723999 0 -0.12680054 0.18628311 -0.12680054 0.508152c0 0.32186508 0.049560547 0.5081482 0.12680054 0.5081482c0.03060913 0 0.06413269 -0.02829361 0.10057068 -0.08724594c0.09765625 -0.23698044 0.09765625 -0.6048279 0 -0.8418083c-0.03643799 -0.058948517 -0.06996155 -0.08724594 -0.10057068 -0.08724594zm-169.37814 -3.7551231c0.26088715 0 0.4547348 0.29003525 0.4547348 0.6578827c0 0.34309006 0.19529724 0.6578827 0.3906021 0.6578827c0.22736359 0 0.42266846 -0.15680695 0.42266846 -0.3419075c0 -0.20396805 0.4343338 -0.30889893 0.9575653 -0.30889893c0.48971558 0 1.0566711 0.09196091 1.418129 0.28295898c0.3906021 0.18392563 0.42266846 0.34191132 0.09764862 0.499897c-0.2288208 0.13204956 -0.45619202 0.4468422 -0.45619202 0.73687744c0 0.22872543 0.039352417 0.34073257 0.15158081 0.34073257c0.096191406 0 0.24340057 -0.07899475 0.46639252 -0.2358017c0.28129578 -0.18628311 0.50574493 -0.26999283 0.66606903 -0.26999283c0.3585434 0 0.3891449 0.4220848 -0.014572144 1.0599251c-0.2929535 0.4468422 -0.42412567 0.97385406 -0.26089478 1.1577797c0.16323853 0.20986176 0.065589905 0.6048279 -0.19529724 0.86774826c-0.3498001 0.33837128 -0.74331665 0.49046326 -1.122261 0.49046326c-0.8919754 0 -1.708168 -0.8406296 -1.708168 -2.095089c0 -0.47395706 -0.25942993 -1.0528488 -0.58444977 -1.3157654c-0.78121185 -0.63194656 -1.2694626 -2.1846924 -0.6835556 -2.1846924zm8.227478 4.9447365c0.4751358 0 1.1732712 0.32540512 1.1732712 0.63430405c0 0.18392563 -0.25943756 0.34191132 -0.585907 0.34191132c-0.6500397 0 -1.268013 -0.6048279 -0.9109268 -0.8948631c0.078704834 -0.056591034 0.19238281 -0.081352234 0.32356262 -0.081352234zm161.17545 1.0445976c-0.05392456 0 -0.08744812 0.32658386 -0.08744812 0.9054718c0 0.577713 0.03352356 0.91726685 0.085998535 0.91726685c0.02331543 0 0.048095703 -0.05777359 0.07723999 -0.1803894c0.09765625 -0.39496613 0.09765625 -1.078785 0 -1.4737511c-0.029144287 -0.114364624 -0.05392456 -0.16859818 -0.075790405 -0.16859818zm5.165329 -24.973633c0.82199097 0 0.9750366 0.15680695 1.0581055 0.8276596c0.29296875 2.0526428 0.09765625 3.026497 -0.8453369 4.1052856c-0.7156067 0.8418083 -0.7156067 0.9738579 -0.16323853 1.4737549c0.5538635 0.499897 0.61798096 2.578476 0.65148926 15.867016c0.026245117 11.468163 -0.12823486 16.078056 -0.60046387 16.078056c-0.09182739 0 -0.1953125 -0.1721344 -0.31045532 -0.4998932c-0.13116455 -0.34191132 -0.19528198 -1.7626114 -0.13116455 -3.1833115c0.0335083 -1.421875 -0.12973022 -2.6055908 -0.35708618 -2.7105255c-0.22737122 -0.07899475 -0.19529724 -0.23697662 0.09765625 -0.34191132c0.7156067 -0.2640915 0.6500244 -1.447815 -0.09765625 -1.447815c-0.48825073 0 -0.5523834 0.57889557 -0.48825073 3.447403c0.065582275 1.894661 -0.032073975 3.7103271 -0.19529724 4.0262985c-0.005844116 0.015327454 -0.013122559 0.022399902 -0.018951416 0.022399902c-0.12680054 0 -0.27400208 -2.8201752 -0.27400208 -6.4963074c-0.03060913 -3.7881317 0.09327698 -6.8193474 0.22007751 -6.8193474c0.0029144287 0 0.0058288574 0.0011787415 0.008743286 0.004714966c0.16177368 0.10493088 0.3250122 1.2886505 0.35708618 2.604416c0.06703186 2.0290642 0.119506836 2.785984 0.28274536 2.785984c0.07432556 0 0.17051697 -0.15563202 0.30316162 -0.41736603c0.4911499 -0.868927 0.51885986 -2.651577 0.08306885 -2.651577c-0.026245117 0 -0.05392456 0.0070724487 -0.08306885 0.02004242c-0.06704712 0.044799805 -0.13409424 0.06484604 -0.19239807 0.06484604c-0.11367798 0 -0.19821167 -0.07545853 -0.19821167 -0.1968956c0 -0.18392563 0.19529724 -0.34191132 0.39060974 -0.34191132c0.585907 0 0.5203247 -1.4466362 -0.09765625 -1.9736481c-0.24485779 -0.21458054 -0.33668518 -0.31479645 -0.27400208 -0.31479645c0.03643799 0 0.12825012 0.035369873 0.27400208 0.10493469c0.065582275 0.030651093 0.12387085 0.047157288 0.17636108 0.047157288c0.25360107 0 0.34396362 -0.3914261 0.34396362 -1.3110504c0 -1.1306648 -0.16323853 -1.499691 -0.61798096 -1.499691c-0.5203247 0 -0.585907 0.23698044 -0.39059448 1.1059036c0.16322327 0.6578827 0.09764099 1.2096596 -0.16178894 1.3417053c-0.0058288574 0.002357483 -0.01020813 0.0035362244 -0.014572144 0.0035362244c-0.2521515 0 -0.4095459 -3.4025993 -0.44161987 -10.581547c-0.032058716 -5.920952 -0.09765625 -11.288952 -0.12971497 -11.920895c-0.065582275 -1.0528488 0 -1.1318436 1.3336029 -1.2096596c0.19091797 -0.00825119 0.35708618 -0.012966156 0.50283813 -0.012966156zm-54.664276 -35.300518c-1.269455 0 -3.1554413 1.2627118 -3.1554413 2.1304576c0 0.3159728 -0.35853577 0.49989724 -0.94299316 0.49989724c-0.683548 0 -1.1062164 0.31597257 -1.5944824 1.2367737c-0.6179657 1.2108355 -0.81326294 1.8427811 -1.5289001 4.684177c-0.8453369 3.4214659 -1.3991699 4.394143 -2.6351166 4.6582394c-0.6179657 0.13086987 -1.3015289 0.42090416 -1.4633179 0.65788364c-0.553833 0.7368765 -0.8467865 6.314739 -0.48825073 10.1040535l0.3250122 3.7362595l-1.1062164 0.31597137c-0.7476959 0.2110424 -1.1703644 0.57888985 -1.2038879 1.0269127c-0.032058716 0.39378548 -0.16177368 8.499428 -0.29148865 17.998653l-0.26089478 17.26178l-1.7241974 0.10492706c-0.1734314 0.009429932 -0.33666992 0.014152527 -0.49116516 0.014152527c-0.74186707 0 -1.2330322 -0.10257721 -1.2330322 -0.2770691c0 -0.18392181 -0.45472717 -0.34191132 -1.0085754 -0.34191132c-0.8132782 0 -1.0406342 -0.15798187 -1.0406342 -0.7628174c0 -0.3949623 -0.1953125 -0.8948593 -0.42268372 -1.1058998c-0.26087952 -0.20986176 -0.48825073 -1.9465332 -0.52030945 -4.1571655c-0.065597534 -3.2894173 -0.16323853 -3.8683052 -0.8132782 -4.2632713c-0.6179657 -0.36785126 -0.7812042 -0.999794 -0.9109192 -4.078171c-0.12971497 -3.4214668 -0.09765625 -3.6584435 0.6500244 -3.8152542c0.7491455 -0.15798569 0.8132782 -0.47395706 0.8132782 -4.7891083c0 -2.5266 -0.12971497 -4.842163 -0.25942993 -5.1321983c-0.14575195 -0.30772018 -0.27546692 -0.45980835 -0.39060974 -0.45980835c-0.37602234 0 -0.585907 1.625843 -0.585907 4.7490196c0 2.7105293 -0.12971497 4.421261 -0.39059448 4.421261c-0.25942993 0 -0.42266846 -1.4737511 -0.42266846 -3.7103195c-0.032073975 -5.263069 -0.32502747 -6.262863 -2.4398346 -7.815609c-1.160141 -0.868927 -2.072525 -1.2969055 -2.9513855 -1.2969055c-0.77101135 0 -1.5157776 0.3301239 -2.3829803 0.9809303c-0.7476959 0.5529556 -1.8539276 1.2638931 -2.4718933 1.5527496c-0.7812042 0.39496613 -1.1382904 0.8158684 -1.1382904 1.4206963c0 0.47396088 -0.16323853 1.3157692 -0.4241333 1.8427811c-0.22735596 0.5517731 -0.45472717 3.999176 -0.4867859 7.7094994c-0.09182739 5.74646 -0.15449524 6.615383 -0.6704407 6.615383c-0.034988403 0 -0.07142639 -0.0035362244 -0.11077881 -0.010612488c-0.06413269 -0.0070724487 -0.12388611 -0.011787415 -0.1807251 -0.011787415c-0.7170868 0 -0.8511658 0.72155 -1.1528625 4.7219048c-0.39060974 4.842163 -0.61798096 5.762966 -1.4312439 5.762966c-0.6500397 0 -0.71562195 -1.2367744 -0.7812195 -18.130703c-0.06411743 -9.972004 -0.16177368 -18.287512 -0.25942993 -18.498552c-0.29586792 -0.5977535 -0.8919678 -0.90665245 -1.6571503 -0.90665245c-0.41392517 0 -0.8774109 0.090782166 -1.368576 0.27588654c-0.59465027 0.24051666 -0.9342499 0.36548996 -1.1834717 0.36548996c-0.26817322 0 -0.4328766 -0.14501762 -0.70251465 -0.4444828c-0.2929535 -0.34309006 -0.585907 -1.2898293 -0.6194153 -2.1316376c-0.096206665 -2.368616 -0.12971497 -2.5784779 -0.45474243 -2.842575c-0.16323853 -0.13086891 -0.2929535 -0.5517731 -0.2929535 -0.92080116c0 -0.36784935 -0.39060974 -1.7897263 -0.8453369 -3.1573696c-0.8132782 -2.447609 -1.2359467 -4.0003557 -1.9850922 -7.736615c-0.22735596 -1.0787868 -0.58444214 -2.5525403 -0.74768066 -3.2894168l-0.35708618 -1.3157673l-0.2288208 0.9997945c-0.16178894 0.52701426 -0.48680115 2.3945541 -0.71562195 4.1052866c-0.25942993 1.7107334 -0.6500397 3.7893152 -0.8453369 4.6051846c-0.22737122 0.8158703 -0.68356323 2.5266027 -1.0085754 3.7893152c-0.61798096 2.2896233 -1.9195099 4.921156 -2.6351318 5.2630672c-0.22737122 0.10493088 -0.39060974 0.7887535 -0.39060974 1.499691c0 0.92080116 -0.16177368 1.2898293 -0.6179657 1.2898293c-0.3250122 0 -0.6179657 -0.15798569 -0.6179657 -0.31597328c0 -0.18510246 -0.16178894 -0.34191132 -0.39060974 -0.34191132c-0.22737122 0 -0.42266846 0.20986366 -0.42266846 0.47278023c0 0.23698044 -0.42266846 0.5270157 -0.94299316 0.63194656c-1.3015289 0.26291656 -1.4633026 0.9467392 -1.4633026 5.7358456l-0.03352356 4.0262947l-2.9266205 -0.20986176c-1.6265564 -0.10610962 -3.8390045 -0.29003525 -4.9117126 -0.44802094c-0.4284973 -0.057769775 -0.81036377 -0.08724594 -1.1484985 -0.08724594c-1.3335876 0 -1.974884 0.45863342 -1.974884 1.4030113c0 0.3159752 -0.3250122 0.6850014 -0.71562195 0.78993225c-0.6500397 0.1579895 -0.71562195 0.73687744 -0.585907 7.1306076c0.065582275 3.842373 -0.032058716 7.0787315 -0.19529724 7.236721c-0.116607666 0.077812195 -0.59028625 0.12850952 -1.231575 0.12850952c-0.43286896 0 -0.94299316 -0.022399902 -1.4676819 -0.07545471c-2.3101044 -0.18510437 -2.3756943 -0.21104431 -2.1148071 -1.0528488c0.78121185 -2.4994888 0.7476883 -2.5525436 -0.4547348 -2.7364655c-0.38185883 -0.061309814 -0.6850128 -0.095500946 -0.92404175 -0.095500946c-0.7024994 0 -0.8657379 0.2971077 -0.8657379 1.1212311c0 1.2367744 -0.78121185 1.9736519 -2.2124557 2.0785828l-1.2359467 0.10610962l-0.2929535 -2.6315346c-0.12971497 -1.447815 -0.16178131 -2.8944511 -0.06412506 -3.1844864c0.09764862 -0.31597137 0.22736359 -5.893833 0.2929535 -12.393673l0.06412506 -11.841904l-1.0085754 -0.15798569c-0.088905334 -0.012969971 -0.18801117 -0.020044327 -0.2929535 -0.020044327c-1.0770798 0 -2.8216782 0.6850014 -2.4063034 1.0210171c0.03352356 0.027116776 0.085998535 0.040086746 0.1501236 0.040086746c0.1807251 0 0.45619202 -0.102573395 0.69522095 -0.27706718c0.055381775 -0.036548615 0.10493469 -0.058948517 0.15157318 -0.058948517c0.41975403 0 0.5028305 1.79562 0.5319824 10.636959c0 6.0258827 0.09764862 15.367123 0.19530487 20.762238l0.16178131 9.788082l-3.675766 0l-0.06413269 -7.341652c-0.065582275 -7.367588 -0.09764862 -8.420437 -0.2288208 -12.498608c-0.09765625 -1.9736481 -0.19384766 -2.2106285 -0.9094696 -2.2106285c-0.6835556 0 -0.8132782 -0.23698044 -0.8788605 -1.3947601l-0.065589905 -1.3947601l-0.2929535 1.4737549c-0.021858215 0.11553955 -0.04372406 0.1721344 -0.06412506 0.1721344c-0.13117218 0 -0.22299957 -2.19059 -0.19530487 -5.5931892c0.032066345 -3.9473019 -0.12971497 -7.6045685 -0.3906021 -8.551306l-0.42266846 -1.6576786l-0.32501984 1.3935814c-0.22882843 1.0528488 -0.5203247 1.4218769 -1.0741653 1.4218769c-0.48825073 0 -0.7476883 -0.23698044 -0.6835556 -0.57888985c0.03352356 -0.31597328 0 -1.4218769 -0.032066345 -2.421671l-0.065582275 -1.8416023l-1.2024231 0.15798569c-0.27692413 0.03183365 -0.49263 0.05305481 -0.6602402 0.05305481c-0.5203171 0 -0.5757065 -0.20514679 -0.5757065 -0.9219799c0 -0.70975876 0.19384766 -1.025732 0.6179733 -1.025732c0.32501984 0 0.6179733 -0.23698044 0.6179733 -0.499897c0 -0.26055908 -0.11368561 -0.37256432 -0.4255829 -0.37256432c-0.1603241 0 -0.37311554 0.029474258 -0.64858246 0.08252907c-0.2361145 0.04598236 -0.44015503 0.069561005 -0.62088776 0.069561005c-0.4357834 0 -0.7287369 -0.13912201 -1.005661 -0.43741035c-0.24485779 -0.2747059 -0.42412567 -0.39850235 -0.61943054 -0.39850235c-0.1428299 0 -0.2944107 0.06602478 -0.48679352 0.18746185c-0.21570587 0.14030075 -0.549469 0.22283173 -0.8613739 0.22283173c-0.15740967 0 -0.30898285 -0.021223068 -0.43869781 -0.06484604c-0.18947601 -0.058950424 -0.32793427 -0.09196091 -0.42121124 -0.09196091c-0.19384766 0 -0.18947601 0.14030075 -0.034980774 0.460989c0.16323853 0.31597328 0.09764862 1.499691 -0.16178131 2.6044178c-0.26088715 1.1059036 -0.48825836 2.447609 -0.55384064 3.0005608c-0.065589905 0.52583504 -0.1297226 1.1577816 -0.16178131 1.3947601c-0.03352356 0.23579979 -0.3585434 0.42090416 -0.68356323 0.42090416c-0.7491455 0 -0.7491455 -0.44802094 0.032066345 -2.1587543c0.4343338 -1.004509 0.6048584 -1.4489937 0.50574493 -1.4489937c-0.065582275 0 -0.24340057 0.18746185 -0.5378113 0.5281925c-1.4312439 1.6847954 -1.951561 4.421261 -2.2445145 12.44673c-0.19530487 4.816227 -0.55384827 9.052383 -0.9765167 10.84211c-0.35707855 1.6305618 -0.7476883 5.314945 -0.87740326 8.209396c-0.09764862 2.8685112 -0.2929535 5.34206 -0.3906021 5.500046c-0.07141876 0.07191849 -0.23174286 0.11200714 -0.4255829 0.11200714c-0.1603241 0 -0.3425064 -0.027118683 -0.5174103 -0.0860672c-1.0085754 -0.3159752 -4.1319504 -2.6055984 -4.1319504 -3.0524406c0 -0.18392181 -0.4547348 -0.92079926 -1.0727081 -1.6317368c-0.71562195 -0.8948631 -1.3671188 -1.3157692 -1.9850922 -1.3157692c-1.5609589 0 -3.0257263 -0.6048279 -3.0257263 -1.2367744c0 -0.86774445 -0.81327057 -1.3947601 -2.1133423 -1.3947601c-1.3671188 0 -1.4312515 0.21104431 -0.2929535 1.1848984c0.779747 0.68382263 0.81327057 0.86774826 0.3906021 2.5784798c-0.5203247 1.9205933 -0.3585434 2.499485 0.6179733 2.499485c0.6179657 0 0.7476883 0.9219818 0.3250122 2.2365685c-0.13700104 0.3772812 -0.3891449 0.60364914 -0.63983154 0.60364914c-0.04663849 0 -0.09473419 -0.0070724487 -0.14137268 -0.024757385c-0.039352417 -0.010612488 -0.078704834 -0.015327454 -0.11514282 -0.015327454c-0.3221054 0 -0.5232315 0.4197235 -0.6981354 1.4100876c-0.3250122 2.000763 -0.48825073 2.3686142 -0.9750519 2.3686142c-0.2929535 0 -0.42266846 -2.6574707 -0.42266846 -7.7884903c0 -4.2090416 -0.12534332 -7.5562286 -0.2842102 -7.5562286c-0.0029144287 0 -0.0058288574 0.0011787415 -0.008743286 0.0035362244c-0.19530487 0.13204956 -0.32647705 3.6053925 -0.32647705 7.710678l0 7.446583l-2.503952 0.10492706l-2.5054092 0.10493469l-0.12971497 -8.946274c-0.09764862 -6.815815 -0.25942993 -8.999325 -0.65003204 -9.1042595c-0.2929535 -0.07899094 -0.5203247 -0.63194275 -0.5203247 -1.2638893c0 -1.2367744 -1.1397476 -2.4204903 -2.3756943 -2.4204903c-1.0727005 0 -1.2038727 -0.23698044 -0.8453369 -1.5527496c0.19530487 -0.7368736 0.8132782 -1.499691 1.5944824 -1.999588c0.682106 -0.42090225 1.2359467 -0.92079926 1.2359467 -1.1047249c0 -0.15798569 -0.6514969 -0.6060066 -1.4312439 -1.0009727c-1.5289001 -0.70975876 -1.9515686 -1.999588 -0.78121185 -2.3674393c0.78121185 -0.26291656 0.35853577 -0.8689232 -0.585907 -0.8689232c-0.3906021 0 -0.9750519 -0.36784744 -1.2680054 -0.8158684c-0.2929535 -0.4468422 -0.7156296 -0.8158722 -0.8788605 -0.8158722c-0.19530487 0 -0.35708618 -0.39378738 -0.35708618 -0.8418083c0 -0.6060066 -0.088905334 -0.7852135 -0.6646118 -0.7852135c-0.12388611 0 -0.26963043 0.0082530975 -0.44161224 0.022399902c-0.84534454 0.07899284 -1.138298 0.31597328 -1.2359467 0.9467392c-0.09764862 0.44802094 -0.35853958 0.94791794 -0.6179733 1.1318436c-0.26088715 0.18392181 -0.71562195 0.76281357 -1.0085754 1.2898293c-0.42266846 0.7887497 -0.42266846 1.0257301 0 1.2627106c0.23757172 0.14383698 0.31772995 0.20986176 0.2273674 0.20986176c-0.05830002 0 -0.18655777 -0.027114868 -0.39060593 -0.077812195c-0.11951065 -0.03183365 -0.23319626 -0.047161102 -0.3425064 -0.047161102c-0.6369171 0 -1.1076851 0.52937317 -1.4137573 1.651783c-0.16323471 0.5529518 -0.65003586 1.2898293 -1.040638 1.6317406c-1.0085793 0.92079926 -1.5944862 2.2896233 -1.5944862 3.7621956c0 0.78993225 -0.25942993 1.447815 -0.6835556 1.7107315c-0.35708237 0.26292038 -1.0406418 1.1318436 -1.5289001 1.9477158c-0.7797508 1.3417015 -0.8453369 2.1835098 -0.9750519 9.604153l-0.12971497 8.15752l-1.0741653 0.18392181c-5.822632 1.0269165 -8.5554085 3.5263977 -9.205444 8.4734955c-0.24048615 1.6753616 -0.397892 2.1410675 -0.854084 2.1410675c-0.039352417 0 -0.078704834 -0.003540039 -0.122428894 -0.009429932c-0.6179695 -0.10493469 -0.6820984 -0.94792175 -0.7476883 -8.341446c-0.06558609 -10.893986 -0.3906021 -14.946217 -1.2038765 -15.683094c-0.35708237 -0.31597137 -1.2680092 -0.7368736 -2.0171547 -0.92079926c-1.2359428 -0.34309006 -1.3977242 -0.5270157 -1.4312439 -1.5798645c-0.097652435 -2.2094498 -0.16178131 -2.8413963 -0.5203209 -5.2100105c-0.39060593 -2.6315346 -0.5203209 -2.7364655 -3.935196 -2.7364655c-1.0085793 0 -2.0171547 -0.15798569 -2.2780437 -0.34191132c-0.180727 -0.15327072 -0.39643288 -0.22165298 -0.61359787 -0.22165298c-0.56550217 0 -1.1426659 0.46216965 -1.1426659 1.0893974c0 0.868927 0.78120995 0.78993225 -11.190533 0.94791794c-1.7883282 0.025939941 -3.7734165 0.23698044 -4.391389 0.4468422c-0.73456955 0.24051666 -1.4166708 0.35959625 -1.9020109 0.35959625c-0.5246935 0 -0.817647 -0.13912201 -0.6995907 -0.41147232c0.07870388 -0.19099808 0.49117088 -0.31243515 1.157239 -0.31243515c0.16323757 0 0.34105015 0.0070724487 0.5334377 0.022399902c0.3133583 0.021224976 0.5611305 0.03183365 0.7549753 0.03183365c0.54946995 0 0.64129066 -0.09431839 0.44890404 -0.34780502c-0.19530296 -0.26291656 -0.35708332 -0.6048279 -0.35708332 -0.7887535c0 -0.18392181 -0.19530201 -0.31597137 -0.42412663 -0.34191132c-0.22736645 0 -0.8118162 -0.18510056 -1.3335943 -0.42090225c-0.36728477 -0.16859818 -0.85116863 -0.25702286 -1.251976 -0.25702286c-0.16469479 0 -0.31627274 0.015327454 -0.43870163 0.04598236c-0.6514931 0.15798569 -0.781209 0.499897 -0.7156229 2.2365685c0.03206539 1.1059036 -0.09765053 2.342678 -0.2608881 2.7364616c-0.20550537 0.50107956 -1.2694654 0.9491005 -1.8786926 0.9491005c-0.25505924 0 -0.42995644 -0.07781601 -0.42995644 -0.26409912c0 -0.16623688 -0.02915001 -0.24758911 -0.08453417 -0.24758911c-0.18218517 0 -0.65586615 0.88189316 -1.3802338 2.5360336c-0.6179719 1.4737549 -1.3656592 2.5266037 -2.1789331 3.0795555l-1.2038786 0.8158684l-0.09765124 9.34124c-0.09765124 9.630089 -0.19530225 10.236099 -1.7883283 10.236099c-0.48825592 0 -0.5859071 2.1575775 -0.5859071 14.630241l0 14.630249l415.98672 0l-0.09765625 -23.918427l-0.09765625 -23.946724l-0.94296265 -1.3947601c-0.48828125 -0.7887535 -1.1062317 -2.3414993 -1.3992004 -3.499279l-0.48825073 -2.0785828l-2.992218 -0.23698044c-0.7054138 -0.05305481 -1.2986145 -0.08488846 -1.798523 -0.08488846c-2.2459717 0 -2.6249084 0.6578827 -2.9178772 3.1113892c-0.22735596 1.6576767 -0.61795044 2.6315346 -1.6921387 4.078171l-1.4312439 1.8687172l0 4.998974l0 5.000149l-1.3991699 -0.21104431c-0.77975464 -0.130867 -2.0492249 -0.44683838 -2.8289795 -0.70975494l-1.4312439 -0.47396088l0 -2.3945541c0 -1.4737549 -0.2288208 -2.6315346 -0.553833 -3.0265007c-0.29296875 -0.36784744 -0.6820984 -1.0787888 -0.81326294 -1.5786858c-0.1618042 -0.47395706 -0.45474243 -0.8948631 -0.6821289 -0.8948631c-0.2288208 0 -0.39059448 -0.36784744 -0.39059448 -0.7887497c0 -0.77578354 -1.4676819 -1.9866219 -2.238678 -1.9866219c-0.11953735 0 -0.22155762 0.028297424 -0.2987976 0.09196472c-0.19528198 0.15798569 -0.45617676 3.7621956 -0.585907 7.972416c-0.1296997 4.2373314 -0.39059448 7.999531 -0.55236816 8.368557c-0.21862793 0.48457336 -0.5276184 0.6189804 -2.0725403 0.6189804c-0.30026245 0 -0.6485901 -0.005897522 -1.0508423 -0.014152527c-3.1875305 -0.025932312 -3.7734375 -0.20986176 -3.7734375 -1.1047211c0 -0.69207764 -1.3598328 -0.9573517 -5.576294 -0.9573517c-0.91677856 0 -1.97052 0.012969971 -3.174408 0.03655243l-5.268799 0.10492706l-0.2288208 1.9736481l-0.19528198 1.9736557l-7.3180237 0l-0.09765625 -12.604721c-0.065582275 -10.868046 0 -12.604717 0.5203247 -12.762703c0.3250122 -0.10493088 0.585907 -0.499897 0.585907 -0.86774445c0 -0.3383751 -0.112213135 -0.49636078 -0.33520508 -0.49636078c-0.07144165 0 -0.15597534 0.016506195 -0.2507019 0.048339844c-0.03933716 0.011791229 -0.07434082 0.017684937 -0.10784912 0.017684937c-0.45474243 0 -0.51013184 -1.1035461 -0.51013184 -6.49041c0 -3.6572647 -0.13116455 -6.9997387 -0.26086426 -7.420643c-0.1953125 -0.57888985 -0.06414795 -0.78993225 0.61795044 -0.92080116c1.0406494 -0.23697853 1.1062317 -0.7109375 0.1953125 -1.2638912c-0.585907 -0.3419094 -0.7156372 -1.1047249 -0.77975464 -4.394142c-0.0335083 -2.6315346 -0.2288208 -4.1571636 -0.585907 -4.473135c-0.35855103 -0.34191132 -0.35855103 -0.499897 -0.065582275 -0.499897c0.26089478 0 0.45617676 -0.31597328 0.45617676 -0.6578846c0 -0.3690281 -0.19528198 -0.6578827 -0.42410278 -0.6578827c-0.22738647 0 -0.32504272 -0.29003525 -0.19384766 -0.63194656c0.14135742 -0.36195374 0.11074829 -0.5034332 -0.21279907 -0.5034332c-0.12390137 0 -0.28857422 0.02004242 -0.50283813 0.056591034c-0.096191406 0.014148712 -0.19384766 0.02240181 -0.2915039 0.02240181c-0.598999 0 -1.2505188 -0.2806034 -2.1162415 -0.891325c-0.7812195 -0.57889175 -1.7242126 -1.025733 -2.0812988 -1.025733c-0.97650146 0 -1.1062317 -0.499897 -0.45617676 -1.7626095c0.5203247 -1.0269108 0.5203247 -1.3428841 0.032043457 -2.2896223c-0.8117981 -1.6058016 -2.7356873 -2.4912329 -5.2571106 -2.4912329c-0.20550537 0 -0.4168396 0.005894661 -0.6296387 0.017684937c-4.4248962 0.26291752 -6.506195 2.3945541 -6.6038513 6.86769c-0.042266846 1.2521019 -0.08453369 1.8074112 -0.16906738 1.8074112c-0.04663086 0 -0.10784912 -0.1721344 -0.18945312 -0.4916439c-0.1399231 -0.55413055 -0.22299194 -0.817049 -0.27548218 -0.817049c-0.045166016 0 -0.06704712 0.19099808 -0.081604004 0.55413055c-0.032073975 0.47395897 -0.26089478 1.2627125 -0.5538635 1.7626095c-0.42266846 0.73687744 -0.38912964 0.92080116 0.29296875 1.3157673c0.42266846 0.26291656 0.65148926 0.47395897 0.48825073 0.499897c-0.16323853 0.027116776 -0.45474243 0.05305481 -0.6500244 0.07899284c-0.7812195 0.10493088 -0.87887573 0.5529518 -0.84680176 3.868307c0 1.8687191 -0.12973022 5.6049786 -0.25942993 8.28957l-0.26089478 4.868099l-0.94299316 -0.18510056c-0.26089478 -0.049518585 -0.6529541 -0.07545853 -1.0887451 -0.07545853c-0.48825073 0 -1.0333557 0.03301239 -1.5128479 0.102573395l-1.6265564 0.20986176l0 4.5521317l0 4.5792465l-4.8155212 0c-3.1875 0 -4.943756 0.130867 -5.2687683 0.3949623c-0.390625 0.2888565 -0.42266846 4.420082 -0.22885132 17.761677l0.26089478 17.366707l-0.94299316 0.8158722c-1.0770569 0.93966675 -3.855011 1.7390289 -5.8007507 1.7390289c-0.28860474 0 -0.5596924 -0.017684937 -0.80307007 -0.054237366c-1.7242126 -0.2640915 -5.074951 -2.552536 -5.236725 -3.5794525c-0.09329224 -0.47159576 -0.35855103 -0.6861801 -0.85409546 -0.6861801c-0.029144287 0 -0.059753418 0.0011825562 -0.09036255 0.002357483c-0.07287598 0.007080078 -0.13845825 0.012969971 -0.19967651 0.012969971c-0.585907 0 -0.60632324 -0.4774933 -0.54800415 -3.960266c0.032043457 -2.2106323 0.19528198 -5.2100143 0.3585205 -6.6578293c0.19384766 -1.8675385 0.12973022 -2.7364655 -0.16323853 -2.9203873c-0.585907 -0.26291656 -0.61795044 -1.7107315 -0.065582275 -1.999588c0.585907 -0.29003906 0.48825073 -1.394764 -0.09765625 -1.5527496c-0.38912964 -0.10493088 -0.3250122 -0.47395706 0.26089478 -1.3688202c0.61798096 -0.92080307 0.7156372 -1.3676453 0.390625 -1.7885475c-0.26089478 -0.29003525 -0.32504272 -0.8418083 -0.13119507 -1.2108345c0.16323853 -0.34191132 0.1953125 -1.1318436 0.09765625 -1.7107353c-0.14282227 -0.71800995 -0.33666992 -0.9880028 -0.82492065 -0.9880028c-0.06704712 0 -0.13845825 0.0058937073 -0.21572876 0.015327454c-0.042266846 0.002357483 -0.08306885 0.004714966 -0.12097168 0.004714966c-0.594635 0 -0.8598938 -0.40203857 -1.4399719 -2.0314217c-0.390625 -1.1577797 -0.81329346 -2.1835136 -0.9109192 -2.2625046c-0.09765625 -0.07899475 -2.6992798 -0.23698044 -5.7905884 -0.34309006l-5.5952454 -0.18392563l0.26086426 1.2898293c0.1618042 0.70975876 0.81329346 2.1575737 1.4968567 3.2104225l1.2359314 1.9465332l0 7.3687706l0 7.3416443l-5.042877 0c-5.5296936 0 -5.6593933 0.051879883 -6.1156006 2.051468c-0.25942993 1.2367706 -0.29293823 1.2367706 -2.2765808 1.2367706c-2.2445068 0 -3.805481 -0.86774445 -4.2616577 -2.3945541c-0.1618042 -0.4998932 -0.45474243 -0.8936844 -0.65005493 -0.8936844c-0.19528198 0 -0.3585205 -8.526543 -0.3585205 -20.051296c0 -14.65736 -0.12973022 -20.262337 -0.48828125 -20.894283c-0.25942993 -0.47278023 -1.3335876 -1.2367744 -2.4062805 -1.7095528c-1.2359619 -0.5270157 -1.9851074 -1.1059055 -2.0827332 -1.5527477c-0.06414795 -0.42090416 -0.45474243 -0.73687553 -1.0071411 -0.78993225c-0.7491455 -0.07899284 -0.9444275 -0.31597137 -0.9444275 -1.1047249c0 -1.7107334 -0.61798096 -2.2365685 -2.6672058 -2.2365685c-2.601593 0 -3.414856 0.42090416 -3.414856 1.8156643c0 1.025732 -0.1953125 1.2367744 -1.3992004 1.6317406c-2.342163 0.7887516 -4.977295 2.4204922 -5.822632 3.5523338c-0.42266846 0.57889175 -0.9109192 1.7885475 -1.0406494 2.6834106c-0.16323853 0.8689232 -0.39059448 1.6847954 -0.5203247 1.7897263c-0.0262146 0.02004242 -0.06994629 0.029476166 -0.1296997 0.029476166c-0.2507019 0 -0.77682495 -0.16977692 -1.3015442 -0.4244423c-0.6485596 -0.29946518 -1.5317993 -0.5281944 -2.0375366 -0.5281944c-0.026245117 0 -0.052474976 0 -0.07725525 0.002357483c-0.68356323 0.025939941 -0.7491455 0.07899475 -0.16323853 0.18392563c0.8453369 0.18392563 0.94299316 0.76281357 0.09765625 0.76281357c-0.35708618 0 -0.71562195 -0.025936127 -0.8453369 -0.07899094c-0.013122559 -0.004714966 -0.029159546 -0.008255005 -0.045181274 -0.008255005c-0.13847351 0 -0.3687439 0.1968956 -0.5727997 0.45627594c-0.35853577 0.5517731 -0.48825073 29.971424 -0.12971497 32.944866c0.096191406 0.84181213 0.032073975 1.5527496 -0.19529724 1.5527496c-0.35853577 0 -1.4312439 -3.473343 -1.2694702 -4.1052856c0.16323853 -0.6578827 0 -1.4737549 -0.3250122 -1.4737549c-0.16323853 0 -0.2929535 0.39496613 -0.32502747 0.89486694c0 0.4998932 -0.0335083 1.6317368 -0.09764099 2.552536c-0.039352417 0.95381165 -0.06704712 1.3417053 -0.21862793 1.3417053c-0.10057068 0 -0.25213623 -0.16623688 -0.49699402 -0.44683838c-0.37748718 -0.446846 -0.63838196 -0.67793274 -0.88468933 -0.67793274c-0.3046112 0 -0.5844574 0.35606384 -1.0348206 1.0988312c-0.44889832 0.7628174 -0.8365936 1.1365585 -1.098938 1.1365585c-0.30607605 0 -0.44015503 -0.5116806 -0.30023193 -1.5055847c0.26087952 -1.9465332 -0.68211365 -7.1565437 -1.4953766 -8.104462c-0.35855103 -0.39496613 -0.6515045 -0.9738579 -0.6515045 -1.2898293c0 -0.57889175 -3.3828125 -1.6305618 -6.603836 -2.0785828c-0.8453369 -0.10493088 -1.5289001 -0.36784744 -1.5609589 -0.6048279c0 -0.2110405 -0.032073975 -3.6313286 -0.06413269 -7.6316833c-0.029144287 -3.4768791 -0.08308411 -5.8867607 -0.1603241 -5.8867607c-0.011657715 0 -0.02331543 0.049518585 -0.034973145 0.15091324c-0.065597534 0.8158684 -0.39060974 1.6317368 -0.71562195 1.8416023c-0.488266 0.29003143 -0.61798096 1.499691 -0.61798096 6.1579285c-0.026229858 4.1135406 -0.22590637 6.115486 -0.64712524 6.115486c-0.12388611 0 -0.2652588 -0.17095566 -0.42703247 -0.5105057c-0.12680054 -0.25702286 -0.19967651 -0.38199615 -0.29733276 -0.38199615c-0.10346985 0 -0.23320007 0.13794327 -0.48388672 0.40793228c-0.2929535 0.3159752 -1.1382904 0.68382263 -1.8859711 0.78993225c-1.3336029 0.23698044 -1.3336029 0.23698044 -1.4647675 2.3155632c-0.096191406 1.7366676 -0.22737122 2.104519 -0.9094696 2.2365646c-0.585907 0.13087082 -0.7812042 0.4468422 -0.7812042 1.2627106c0 1.868721 -0.61798096 2.6845932 -2.2124634 2.9215698c-0.94299316 0.13087463 -1.4633026 0.3937912 -1.4633026 0.7628174c0 0.2888565 -0.2929535 0.8158722 -0.68356323 1.1577759c-0.39060974 0.34191132 -0.7812042 1.315773 -0.9109192 2.1575775l-0.22737122 1.5268097l-5.2702484 0l0 -19.5514l0 -19.578518l-0.9109192 -1.6046257c-0.8322296 -1.4242344 -1.0552216 -1.8062305 -0.72146606 -1.8062305c0.12243652 0 0.3206482 0.050697327 0.59173584 0.12143707c0.2434082 0.061307907 0.42851257 0.0943203 0.55822754 0.0943203c0.3731079 0 0.29003906 -0.2723484 -0.1676178 -0.9361286c-0.22737122 -0.36784744 -0.74768066 -0.6307659 -1.171814 -0.6307659c-0.42266846 0 -0.94299316 -0.18510246 -1.1047668 -0.4220829c-0.16323853 -0.23579979 -0.26089478 -3.3412933 -0.19529724 -6.919565l0.09764099 -6.4998426l-1.269455 -0.36902714c-1.4633179 -0.42090416 -2.1789398 -1.5786848 -1.7883301 -2.9463282c0.19529724 -0.7899313 0.06411743 -0.999794 -0.7491455 -1.2367735c-0.9750519 -0.31597233 -0.9750519 -0.31597233 -2.1789398 -5.026088c-0.12971497 -0.499897 -0.585907 -1.1577806 -1.0085754 -1.447815c-0.42266846 -0.3159728 -0.7812042 -0.78875303 -0.7812042 -1.0257325c0 -0.416188 -0.44015503 -0.66377854 -0.9619446 -0.66377854c-0.3046112 0 -0.6369171 0.08488822 -0.92404175 0.26881266c-0.28129578 0.18746138 -0.4372406 0.2794237 -0.49116516 0.2794237c-0.052474976 0 -0.011657715 -0.08488822 0.10057068 -0.25348568c0.48825073 -0.6578834 -0.91093445 -1.7095537 -2.276596 -1.7095537z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
