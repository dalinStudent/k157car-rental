import { useTranslations } from 'next-intl';

export const PoweredBy = () => {
  const t = useTranslations('footer');

  return (
    <div className="powered-by-badge">
      <div className="floating-badge rounded-xl">
        <p>{t('powered_by.title')}</p>
      </div>
      <h4>{t('powered_by.company')}</h4>
    </div>
  );
};
