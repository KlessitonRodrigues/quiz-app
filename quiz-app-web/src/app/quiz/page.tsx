import CirclesBG from 'src/lib/base/background/Circles';
import Page from 'src/lib/base/containers/Page';
import Header from 'src/lib/components/Header';
import QuizPanel from 'src/lib/components/QuizPanel';

const HomePage = () => {
  return (
    <Page>
      <Header />
      <QuizPanel
        question="Which of these colors defines the minimum WCAG 2.1 level AA requeriment
        for normal text?"
        currentCount={1}
        totalCount={10}
        options={[
          { index: 'A', label: 'Option 1', value: '1' },
          { index: 'B', label: 'Option 2', value: '2' },
          { index: 'C', label: 'Option 3', value: '3' },
        ]}
      />
      <CirclesBG />
    </Page>
  );
};

export default HomePage;
