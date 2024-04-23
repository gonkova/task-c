"use client";
import React from 'react'

const Info = () => {
    return (
        <div className="mx-auto w-full md:w-4/5 bg-white  rounded-lg overflow-hidden">
            <div className="px-a6 py-4 text-center md:text-center">
                <div className="font-bold text-3xl md:text-7xl font-grotesk text-custom1 leading-10 md:leading-72 tracking-tight mb-6 md:mb-11 mt-6 md:mt-11">
                    Гъвкави решения за <br />
                    сухопътен транспорт за<br />
                    всеки клиент
                </div>
            </div>
            <img className=" md:w-10/12 mx-auto mb-6 w-80" src="/images/image.png" alt="" />
            <div className="px-6 py-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-bold text-4xl text-custom1 md:mt-10 mt-2 md:mb-8 mb-4">Решения</h1>
                    <p className="text-custom1 text-base mb-4">
                        Фокусът ни върху клиентите е същността на нашата работа.
                        Ние доставяме услуги за всички видове бизнес – от малки местни предприятия
                        до мултинационални компании.
                    </p>
                    <p className="text-custom1 text-base mt-8  ">
                        Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
                    </p>
                    <div>
                        <ul className="list-disc ml-6 text-custom1">
                            <li>Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
                            <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
                            <li>Взимане на стоки и доставки за от и в България;</li>
                            <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
                            <li>Регулярни групажни линии;</li>
                            <li>Транспортни услуги до Турция и Близкия изток;</li>
                            <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
                        </ul>
                    </div>
                    <h1 className="font-bold text-4xl text-custom1 md:mt-14 mt-7 md:mb-8 mb-4">Предимства</h1>
                    <p className="text-custom1 text-base mb-4">
                        Фокусът ни върху клиентите е същността на нашата работа.
                        Ние доставяме услуги за всички видове бизнес – от малки местни
                        предприятия до мултинационални компании.
                    </p>
                    <p className="text-custom1 text-base mt-8 mb-10 md:mb-16">
                        Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info;









