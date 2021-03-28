import style from '../About/About.module.css'

function About() {

    return(
        <div className={style.wrapper}>
            <article className={style.content}>
                <p><strong>Националната здравно-информационна система (НЗИС) </strong>е създадена в рамките на Договор за безвъзмездна финансова помощ (ДБФП) № BG05SFOP001-1.002-0007 от 21.03.2017 г., по проект <strong>„Доизграждане на националната здравна информационна система (НЗИС) – етап 1 и етап 2“</strong> с бенефициент Министерството на здравеопазването. Проектът се осъществява с финансовата подкрепа на Оперативна програма „Добро управление“ с подкрепата на Европейските структурни фондове.</p>
                    <p>Основните цели на НЗИС са:</p>
                    <ul>
                    <li>Подобряване на качеството на медицинската помощ;</li>
                    <li>Подобрена диагностика и лечение, намаляване на медицинските грешки;</li>
                    <li>Осигуряване на рационално лекарствено лечение;</li>
                    <li>Улесняване на комуникацията между пациенти и здравни професионалисти;</li>
                    <li>Повишена ефективност на здравната система;</li>
                    <li>Бърз достъп до необходимите данни;</li>
                    <li>Лесно четима и пълна медицинска документация;</li>
                    <li>Повишаване на ефикасността при изразходване на финансови средства;</li>
                    <li>Подобряване на диспансеризацията и на профилактичната дейност.</li>
                    <li>Намаляване на разходите за съхранение на информация.</li>
                    </ul>
                    <p>На база на подробен анализ и технологични препоръки е стартиран проекта за реализиране на първите два паралелни етапа от изграждането на <strong>Национална здравна информационна система (НЗИС)</strong>. Той обхваща всички участници и основни потоци информация в сектор „Здравеопазване“, за да бъде реализиран “минимален осъществим продукт” (Minimum Viable Product) по отношение на е-здравеопазването, а това включва:</p>
                    <ul>
                    <li>Електронен здравен запис (пациентско досие);</li>
                    <li>Електронни рецепти (е-рецепти);</li>
                    <li>Електронни направления (е-направления);</li>
                    <li>Единен здравно-информационен портал, осигуряващ публична информация, медицински статистики, достъп до публична информация от регистрите в сектор „Здравеопазване“.</li>
                    </ul>
                    <p>Единният здравно-информационен портал предоставя контролиран достъп на гражданите и потребителите на медицински услуги до техните персонални Електронни здравни записи (пациентски досиета), включително и история на издадени е-Рецепти и е-Направления.</p>
                    <p>Паралелно с разработката и внедряването на НЗИС са централизирани и електронизирани всички ключови регистри в сектор „Здравеопазване“, които се поддържат, както от Министерство на здравеопазването, така и от други отговорни институции и организации, които имат съответните нормативни правомощия.</p>
                    <p>Интегрирането на централизираните регистри с НЗИС дава възможност инкрементално да се въведат множество автоматизирани валидации и контроли на различните стъпки от процесите в сектор „Здравеопазване“.</p>        
                    </article>
    </div>
    )
}

export default About