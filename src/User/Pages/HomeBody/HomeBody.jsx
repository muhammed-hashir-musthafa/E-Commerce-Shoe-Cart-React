import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgYGBgYGBocGhocGBgYGBgaGhwYGhgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHRISHzQrJCw+Oj86NDY0NDQ0NDY2NDQ0NDQ3NzQ0NDc0NDQxNDQxNDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwUHBAj/xABCEAACAQIDBQYEAwUFCAMAAAABAgADEQQSIQUxQVFhBhMicYHwBzKRoUJSsRQjYnKSgsHC0eEVJDNDY6LS8TRTc//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAQQCAQQDAQAAAAAAAAABAhEDEiExQQRRoRMicbEyYZEU/9oADAMBAAIRAxEAPwDqt4iYpEj3ecLZ00BMiTAiRYe7yjZZIGMxFvKNlHSYmEo2WSEW8pEnp+kGHnIG/WUL0M+UjbpIsfdogw4yCaGU6RFDyhmHswv5/aBuRyyOXpMubqZEsef2/wBIG5jIhaZCx6QueQgGOEnm6QLdIBHL5Qy9Pf0jzHmYZjAFl6Qy9Pf0hc+//ULn2P8ASAGWFo8x9iGY9PpAFaEnnPT6GEkG7yyJWTvETOlo57MZWRKyZMiTM2iyZBhMZWZSfd4jKtFkzAUiKGZT5SBPSVaJswshmJ0npPlIHyMiiyZ5ChkSs9Z8pEge7SCdR5cvWI34H++ekgRZRz/WBqPNnb2JJG6D6z0ZOsWT3pBNox955xh/L36yRQxFDBGwien6wzdPf0iyQy+/YgDzDl+kMw5fp/lFY9Yre7wCeYcv0hmHL9JD371jtJA8w5fb/WEVven+cIBvSJEiSKxFZ0MwIESJHnJFJErKMsiJHu8xsPd5lK9JEoeUqyUzCQIiPdplKSJQ8pVlrMJHvSQPvQTOUMRQ8pBNnnJ92iLzMU6RFDIJtGLP7vF3nvSSKRGlBOxEuPYMM46QNIyJQ8oGw7j2YfWYzTPI+/KLuzApGXP1P3hm6iYrMIXbl+sCjLm6j7QzH3aYc55R35rAozZj7vDP0mEeRjzecCjLn6fpCYr9G+phJIosVxETAyM3bOegvESIGRMq2WSAkRFhzi9Z5KuLIcoqM7Kiu1igADlgouxFycjdNN8ryTseokQMwYbEhwSLgqcrKwsyNvsw9Qb6ggggkG8y2lWShSJPWMyJEgmhEyJIjIkSsgtQFusWYc5G0VoFEr9YiesgVhlgUSJ92iJHOQKwt7tBNEtOcPUSFusLQKJm3OLTn+kVvfsxWgEtOYhpI29+zDLAonp0hIWhANxeK8cRE2ZkK8jmktIiJVkizecovb/tM2HZadJB3mXMahzAorH5VKkHhc623eYvVpzv4q7GYqmLQXyDJVH8JbwP6EkH+ZeAM0w6da1GeS9OxUqXbbHCp3gqC4FsmQFGW+5s13IFz+LTWxFzewYP4nVBpVw6NzKOVI6hWDA/1Cc+3Ee9OMy9yWYIviYgbuJ4+nGd/wBCM9qOfW472do2L2wwuJIVHKVDoKdTwsTyU6q39kkzfE9Z87YikUZka11IBtqN1+PvSdF+Ge3MRXr/ALPUYvTCM+ZtXQLYAB+IJYCx9N05sviuL+3/AA2hmT5Ogk9TIk9Zqu0G2hhqhQ0y4ABuGsdRfUWnm2X2poV3CWZHOihrWY66Ag3vpxA6XnNLDOKto2WSL7N4W6mRLHnJECRIEyNBEnnFmPOBAh6mAIsYsx5iMiFusAQY9IZj0jy9YZesAjmMMx6R5esCOsAWcwzQt1jtAFmMIW96Qkg2tppNpdq8Jh6poVKtqgXMyKjuVXLmuxRSB4fFY8Nd03tpznDYZcPt2t39suKosKLN8rFu7DJfdfwOtuqj8QnRjindmE5NVRetn4+nXRalJw6NezC/A2IIIuCDpY6zPYThdavXwNWph6NapTFOo4AV2ytrYMy7iSoWevC/EDH0vmdKgvuemp046plJ87zSXjPmLKLMu0dpt1mt7SV0TC12qWKd26kX+YsCqqOpJA9ZVk+J2HNJW7qoapHiQWyKR/1DvU8wpPMSodo9v4nFsiuuRWsadMAhTnJVW8Xzk7sx0tewFzIx+PJyt7JEyyxqkVt+XSX7B7NWnTpoVUPlGc2F7nfc79LmV7svsk1MQS48NJzmsbgup+W45b/pzm77V7Q7tH4O4KIL8CLMwHIKT6kT3vDSxxeSR5XkS1SWOJTKtTvHdxuZmceRY2H/AHCda+D+x+7w9TFOLGqcqX4U6ZN29WzeigzmvY7Yj43ErRW4UrmdrfIiuhY+ZtYdSOs7tteolCitFAFUKFAG5KaiwH0FvrOCTvc60ik9pH7yozkgZmJ1/Iotp1Cj7Sr7TpimyupF0zMpBsdFLAsl7DXUHzvwm/2u6gCoaqqmZVNipZ3vogU8720sd+o3jT08Gr1qFNUCB2DFSLOEOVmzrlGU5FqWUkmwF99pRulbNUujprHXQyBY8xGw6SJUezPHO4RboJG45QKjl95Er0+8AkSOX3/1iJHWIjoYso9/+oAzbrFp1iyjr79IW84A9OZhbrC3n9otOv2kgdusPWFhD371gC9YR38/frCQDc5vOajtPsFMbRNNvC4u1Opa5R+fVTuI4jqAZuLe9IZZqm4u0ZNJqmfPG0Frd6wxBbvVJVydWJS63v8Ai0UWPG4PGWXZXZJGKd7UIzC+RACwA1N3a4PDcv1nn+JTBMfUawF0ptfn4F1PW6Eeky9ncU4qZHY51R2a5GmaxAvyCkexPVxvUk/ZwyVNm32Xs7DpWrZKSMtKtSQFznIzhBorbjmZjcDlNft9KmI2ySq3VKlB7m4UU6aIzEsBu8DbuOkhgseGOICspJxVEjUXIFemoYD8uUNr5c5bsAgBLtqAGvcgA5xlIuTYXzWnXDFGUXJuqOec5RmklyebHt+y01z5Gdg1lVUQuy6u1RlRcqre7sRYX01Npzd6NfFVM73u5AGh1BPhVE3ga6DrxuZt8ftp8ZWygnIQA7FFVmUOz5dL2TO5st75R4rnMTeuw+x7lsY6Fgl1pLa5ZxoX3X03DfqzchJbUsdy4XC9iMNMmly+ze9iuz9PAUSlh3jKHrtvItfKlxpZQSOFzcjebVztjtgEOxYKDbeCVCA2sbbv8yOctfaHFGnRt+N/EwvyA8P1AHoec5W2LznOcxJYIdxRXzfKBpdSTa505kTj5Z1xS7PKlGrTrvoCpU1KYYhWVallN/D4cuaxB3A8d8snYfBs9V8W17WZEB1uzEFmuRwGl/8AqMOE0ndYjFstNsqu53W8SJxLW3BbsOpvadJwWDSiiU0FlQWG655k9Sbk9SZzeTk0x09v9G2ONy/H7PQT0kCfdoMPfsyBHvT/ADnnHUMmRJkWiIgDJ6e/pC8gR5+/WAv1kgyZvfsRXkPUx68zAJXheLXmYBjAJXjvIAmO5gEvfvWEjmPu8IBuQ8efymICO0uVpHLfi7TpitSfXO1JlblkD+A8r3Z/oJVkxGZKtSwDNSIbLf8AFWRVuDxygS6/FzJbDXHj/e2N9y/u7i3mRr0POUCg/wDu9W/5qaefiZv8E9PB/BHFlX3M2fZHCM7Xs1mqU0BscpKuKhF7fMAqm3XrLp2jxC4dEDpnBDVCmcKbJYF7lWJILqFGmpJvdVIj2F2a4w9AkrkztXG/PnZGpgbrWIIa+8WtKz222qGxLoiI6mmEF8xZixV+8GRgQfCmUG4yomljadluOJx9nGpKWa10vkxdn1ptUShh1LVMRUGgvlpIRcZmYktkQsTa+oYX3TvWCwy0qa00FlRQqjoP7zv9Zyv4PbFYVa2IdbFEFNL7wzklz0NlX+ozq+Y9LfeZScmlF9G6SW67Kx23GiPwsVP6j/FOWbQdFR3C5SHZRZTZWvmJzMN9xv14azsfaLDd7QdV1bLmW28ldRbztb1nOeyuxDWqftNVbIrfu0P43BtnYcgR6kchrjkkoLUzbHbdI3XY7ZRoUzUqf8aqAWvvRPwpruO4n0H4ZYDUPMRNY8JjYec8qcnOTkzujFRVIwbQ2olBc1U5R0DMTzsqgsQOJtpxi2dtWjXXPRdXU6XXgbXswNip1GhAOs02CZm2jicx/wCHRoLTv+R8ztbzcC/8o5SvUK60NsOlPRKuVaij5cxpZww63sf7TS6xpprurM3OnfV0dCLmY2qGYy1uYkTUmRrRJqzDlEKxkS8Vxyggn+0HpH3x4WmOwhkEDYyriOgk+98pgy9YwvT6QTSM3eniId4eAvMQMcEGTvTyhMV/OOWBvxHMVzJBjLFTnPxcpof2Zj8/70AX4fu9485z+q+XDjhmqE+YRB9vHLf8VkviqRLWHcIDpoB3tTxffXylXagGbC0bGzObqd4D1ilj6JPT8dfYkcOV/czpjYkYXBIl1DLSVAWuVXKgD1Ht+FRc24kqo1YSrYPZ+QVMQyspfUFyMwAAJZ23B3bxNbRSbcJstvY69RVGUlT+K+QOFFR6j2IulJCrkDezpxWUnauPqYqtlDO2d1Skr6WzEIngUBVJuDoOPG075zjB3zXBw4YNr87s7d8PMKFwSvv713qEjiCcin1VQdOcslQ8rX4THgMEtGlToqPDTREXyRQAT9JHF1wiszlVRQWJJ0UDUk8gJyanKTbOuqVFT7bbZWkiUO+po9WoivmfIwolv3jI34fCGGYkbzYlrA+6mFCqEChAoChbZQoGgW2lrWtODdpdtNjMVUrkmzNZByproo87anqTN/2I7WjBlqVcuaLWKZfF3ba5rLvyte5tuIvbUzl8iEpq110b4ZqLpnWiZp+1GMejhatSno6qMpsDYs6rmseQJOvKeSp282eFv39+gSpf6ZNJSO1Xb04hDRoIUpto7Nlzsv5QBcKOepJ6ceXHhm5K1sbyyRUXTNXs/tHiaVbvs5qNlZCKhZgVY5rb7gZgCLEW9TJ7P2yDj1xNeyKXzOVDFVsmXRdW3jdrvmnZNfdz75yZokLnNl5Ak3bgbaagek9B447nIps7dhMUlVA9J1dG3Mp06joehmRgZxzYW3KuEe6XKG+emxbJcgeIrffoNd9hxGk6TsTtLh8SAMwSp+JGYX04oxADjjprzAnn5MEo7rdHXDMns+TbEdJH0mcp1kSh5zGjazFm848/u0mUPMRWPIRRAu8kw8hboIWHKSDKHjzDlMWUdY8o5wDJp7vHMOXr+sIBYrRzHmjvLlaOe/FeirCloMwDa21KsQACfy6NKTsfE3xKPbMKKEgC927tCFA1+ZnK+rT09s9qGtiqrBiVDZE5ZU8Nx0JBb+1DsXgM9ZqjHKlPLmNtC7t4Ftx8Sg+arznq+NFqkefnkmmzYJgHqm1swzFKjXGVu7JqOLbyHxBYm34aSjiL2XsB2UU4n9oqE1GpnOXbcarXtYbt925ggTHTxFM5KNBWbM1JFY6gh8ztuJJPdqGBJvesl95nS9kYAUKQQDW5ZjzZt+vGwsATwAnRm0pbGGJtvc9jk23gfrOUfGHtPkQYKmxzvZ6pB1Vb3VdOZFyOQHBp0bbe0Rh6TVCGZtFRARd3Y2RF6kka8BcnQTgHxEpsuKCuwap3avUbcGq1GZmI45QMqqOCoonNaW3s3S7KxhxrPRWoZhp6f5T17M2Q9QHIRcagHS/S/A+9JkxGEqUzZ0dbcbXHow0P1mjxTStrYqpxbpM0ndNuyn6f3zeYDs7UKirWBp0tTncGzW4INM56DTmRCjhmdS+gW9gWFka3zePctrgXawJJ1uLTbYLa2JYLhqytVpaLlcE5AbWYP+UDW9924yMcU5aWTPUldbEKNSkECPSCqwDByD4ww0ctvW99Pw62BmZdjAkFfGBqoY6rrfwNuPkfvPXtbvnRabu9SmpunymrTNgBYkfvFtcZSQSDqTYWr52ZVdCUZXVGUAI1rs5IAFE2ZXuPlAubiwI1muXHLG6kikZKW6Zs9vYUqoUU85I0c3DJa2hHEbxy03azR19nuq5rArbXl9+Gs92F286r3dcF0Btro6W0sGO+2uhv5iejH2r01FFywU5igAD7reJN5trYi41MxpPgvdEtg9rauGUU7CpTHyozEMnRWsbDoQfSXrYvaehiF0cU30BR2VTc7sp3P6a9BOYthUCM7kLbQDcxJ4D6a9AZ4mpnfa4tr9eMwngjL8msczR3Ug+zI6znfZztbWQFKp7xRYLmNmH9u1yP5r8N0sOF7a4ZzZ89M3t4lLL6Ml9OpAnHLBJP2dMcsWix3Mdzynjw21KFT5K1NzyV1Leq3uJ7NZm4tcmiafA83SPN0kM3vSIvFEmW56xTFn8vrHFA3AqTVdp9sfs2GeoPmtkT+d9AfTVvJTNpacv+JW1w9VcOp8NLVutRh/hXTzZhPZn4uGKuvk5ZZZUUpjLvsVcmCppu753qOwIB1ZaKbxwDCoOqShu86H2LwZxtNKaMV7sKtUg/IgDjNY8SLW5nyM08fRb1Po4sqbSr2Wj4dbL7xzjGTKgDCiN12qEMxsPwqiUKY36o3KdDZrazz4egtNFpoMqqoQLyUWHqesrO3NonEu2GpMe7Xw4moptyvQQj8TD5j+EdSLZ7zkaRVbIwNi/2mv341o08yYfk7HwvXtyOqKeWY7nE4/2/xy18a7JfKqqlyLXKXBI6XvOr7e2imFw71AAMiZUUaDOfCigcBe3kBKX2ZXA4gZcSihj+YHL5q66r62k5cUYtNcmknS0lZ2DtkUfC6FlP4lPjXzB0b7eZ3S20dtYdxcVUHRzkP/da/peWcfDDZ1UXp1qq/wAtRGH0ZSfvMZ+DmH4Yqv8A00//ABm2LzcmNaeV/ZzSwxk74K222aRYKtTOx0CorsT/AEgiRr7SRWAcFAxABcoATcC9lYsN4uTaWfCfC/Ao5Vq9R3FvCwSw3W8OWxvcb77vOeo/DHZ7jR2v/CUHD+EDnLS8rWrdJlowcNlwVV6SPYBwGylyCVyom8O12DhMpBzhCuupFjPA2BuFrKbBvCtVGUqd3gLKSrcLob9RLo/w1yoUoYt1UhgEdQwXOrK2Rmv3dwzXKgE3OsqO2uxO1KCUxSAenSplP93qNmbMxZ2ZSFZixIuAG0VRwkrzHWmdNFXiTdx2PNjsKa7IawVitwXF1Z1KkBWFrjKbEENbeMovppMX2fdTmosWtwJCuPJtAftPTRrYxfDUVvCLG4DPfkyGotj/AKc576WLqqMzLZRvZu7RfL52/WbKGCca0tf2Zt5IvlMr67VcXTEIX4G/hqL628Q/mHrMtUI6HJVUagkNZH0Fra+FvQ6mbrE4yhWstSmrjgVqUSwvyu6kek02O2Ko1ps6j8tVHW3lUAKH1I85y5MDjvF2vk1jkT5VHlxNVCQwJJsAb9NBxM8ZaY20Nja/Qg/Qg2MLzlNSeaZKWJdPkZl/lYj9JgvC8Em3wHaHE0mDLVdhxR2Z0YciCdPMWM6XsvbCYiktRFIB0IJ1VhvXr58RacdAJIVQSzEBQASxJ3AAakzpHY3BVKFOpSrIUdagZlO9c9NGAPXKViGGE5VJGkJyTosvf/wn6wmOE3/4sPr5NfqSLKJ8+7Xdu+qh/mFWpmvvzZ2vf1vPoIyg9tOylOpU/aF7wMzKaqpZs6iwJTN8r5RpwuBpvM2ywclsYSKJ2Z7N18fW7ukLKLGpUI8FNebHi3Jd56C5Hf8AYexsPgKApUQFRbs7tbMzW1Zzpr9AAOkp9Dtts/A0BRoUqi5dRT7tlYsfxVHawZuZBPS+kpW3e12JxhtUstPhSW4T+3xf1003Tm0VyVSs6JtbtKcRenh3NOjqHxA+ZxfVKAPD+Pd+W+8eajjqVJAlMBUXcB9SepJuSTqSZzcbQc8TJDFv1hZXHiJrGMUbn4gbQz0qSjVe9BblorAX+p+k1Ww0CKC4NmsE3EX1363BNjwtpMNasXUqy3BkKOMAUU3+QWA0CkAG+jAWvqdW575VtydtFZJJl4wNSyAtYOfwgNf5svmdT/fMtHbzKBaoya2HjI3i4PrNZiMdgyUdC4cD52IUI1vmU28Vx4Tc6gDedZ40xYCLWqMjEkBRmBL2Z1uiBiUUhr+LW4GlpFBKLZYx2rqqdKrnzIcb7W1vrfhN7sLtOjuFqKlzYK6gDxC4AYDTiRfhectFQkqUZRa/g+YJdr5mby3X11PLTJhq7KzeNclrk2Ci/wCULmJ33IPHWTpIpNHemf8Ay9++MgtRvrew8uZlK7J9rUrKKLuveILqSR40X9WXjzGvOWD/AGmnB0tfU5xfyAEuo2Z0ezH7PoV9K1NX00bcwB4BhY+l5Stv/DN3JfDYm3KnXRHQcsjZTl88pJ4mXihilIJFmFxl1Go0I+956Vq26m1yeHG/pp95FySpNikcSxnYfHUyQ1G6gXzJRw9VT5KoD/VRPOuHFCxZXplR4goqID1NMafb6ETvGe3G55dfZgzk3Frj68JpjzOHKspKFnB6m2g5PgSotjcFQ4PmVJZeoKHdMFbZuEr3yB6TjQhCHQsBr4Qbr6hPWd3fC0ybmmhPPKt/raTUIDooHko0l3n1fyjZVY64dHzeezWLL5adCrUv8rKjlSNd7Wsp03E+p3yybH+F2NqkGsUw6ccxDvboiG31YTtb17ak2A38LDnwlQ212+oUyUw/799xKkd0h/if8Xkt+tpz6bexqrPRszYGB2VTNW12tY1WAaqxO5EAGhPBVGvWaQ4nMz1WXK1V87LcEr4VRVJGhIREBtpcG007bQes/fVmzvuXgiKd6on4RzOpPE7hPQla86McNO7NYxrdmx70QnizQm9ly9FZiemJ6CJAiVTM2eOtgUf5kU+YBnjfYWHP/KT+kTb2iIk2KNIdgYf8ixf7Bo/kE3ZEjaTYNI+wKP5BPNV7MUG3oJZCJG0smQU6p2Gwx1XvEJ/I5WYG7AUj/wA6t9aZ/VLy8ERWlXGL6FFFPw+pf/dW+tP/AMI0+H1Ab3qn+0n9yCXi0LRoj6QopY+HuFO/vD5u0mPh5gvyH+tpcbQjTH0gVfD9jaVLWi9Wkf4Kjr9gbGe+nhMcnyY5mHKpTR/+4ZWPqZuLwvDgn0KNWmL2mh+fCuOtOorehDkD6TKu2Noj/kYZh/8AtUU/emf1nuiMr9GPoijwvtraR3YfDDzruf0pzw4jHbYfQNhKQ4FRUdvq2n2m7MULDEUUrGdmcZiP/k4xnH5LEJ/QLL9pmw3ZBE/GT6S3GIiaRhGPCJRoqewUHEmetNnINwmwIhaXpEnk/ZF5QnrhIok2xkDJRGYIEYrSUUkgUiRJGEkECIjGYpIC0VoEwkgiRCOKSQERjigCijikkihC8RgAYQhJAoQheSBWijvAmARtCPNCAbQyJjiM50SRMI4jBAojJRGSCBitJRGWAoo4SQKKOBgEYjGYpIFFGYjJArRRxGABhAwkgUIQkgJEiOIwBWhC8IBtIjHEZzokRijiMEBERCEkBIGSMiZIFCERlgEIQgCMiZIyMlARiMZikgURjvETAAwhCSBQhCSAitHFeAK0I4QDZRGEJzokUUIQQEIQkgiZExQkgIoQlgEIQgAZjMISUQEIQkgjCEJJImgYQhAUZhCSBQhCAKEIQD//2Q=="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=false"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://contents.mediadecathlon.com/p2393894/ae11c369077717da979826d33db65b1c/p2393894.jpg?format=auto&quality=70&f=650x0"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.campusshoes.com/cdn/shop/files/NORTHPLUS_11G-677_BLK.jpg?v=1705644888"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://cdn09.nnnow.com/web-images/medium/styles/KTDP2DTUXKQ/1683610487559/1.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgah-7_CUJebO8urFa-V2kTTyVpjGwgHAYgQ&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/products"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
