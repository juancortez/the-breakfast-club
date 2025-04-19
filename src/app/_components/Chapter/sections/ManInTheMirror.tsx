import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const ManInTheMirrorData = new Map<string, IChapterData>();
ManInTheMirrorData.set('1', {
  book: 'The Rat Race',
  identifier: 'the-rat-race',
  element: (
    <>
      <div>
        <Question question="Do you agree that most men are caught up in the rat race? Why?" />
        <Question question="If the rat race is an unwinnable race, why do you think so many men run in it? What are they trying to accomplish?" />
        <Question question="In what ways has your material standard of living gone up since you were a child? In what ways do you think your moral/spiritual/relational standard of living has been affected?" />
      </div>
      <div>
        <Question question="It appears that many men have been lulled into mental and spiritual complacency. How has consumerism and the media impacted your own values and the way you spend your time and money?" />
        <Question question="Madison Avenue works hard to define for us who and what we are, usually in terms of the beautiful, wrinkle free life. What practical steps can you take to unloose yourself from its influence?" />
      </div>
    </>
  ),
})
  .set('2', {
    book: 'Leading an Unexamined Life',
    identifier: 'leading-an-unexamined-life',
    gradient: 'bg-gradient-to-r from-indigo-400  via-yellow-500 to-green-500',
    element: (
      <>
        <div>
          <Question question="What would you like on your tombstone to summarize your life?" />
          <Question question="Which of your experiences and relationships do you think have had the greatest impact on how you think, speak, and act? In what ways have they influence you for good?… for bad?" />
          <Question
            question="Of the two life views, the Christian life view and the secular life view, what percentage of each are you? Describe the thinking that brought you to your answer."
            FollowUp={
              <div>
                <p>Example: 60% Christian life view, 40% secular life view.</p>
              </div>
            }
          />
          <Question question="Are you the kind of person who gives thought to the why questions of life, or are you content with life as it is? What are some of the risks of leading an unexamined life?" />
        </div>
        <div>
          <Question question="There are two yous: the visible you that is known by others and the real you that is known only by God. Agree or disagree?" />
          <Question question="Are you willing to allow God to show you yourself as you really are? What are some of the things that you might find out about yourself?" />
          <Question question="The secret of knowing something well is to keep “looking at the fish.” What kind of commitment would you be willing to make to self examination in terms of time and effort?" />
        </div>
      </>
    ),
  })
  .set('3', {
    book: 'Biblical Christian or Cultural Christian?',
    identifier: 'biblical-christian-or-cultural-christian',
    gradient: 'bg-gradient-to-r from-teal-400 to-yellow-200',
    element: (
      <>
        <div>
          <Question question="Think of a Christian couple you know that is having marriage problems. In what ways do you think their conformity to cultural values has contributed to their struggle?" />
          <Question question="Dr. Frances Schafer says that modern society has 2 impoverished values. Personal peace and affluence. Do you agree with Dr. Schafer? Why or why not?" />
          <Question question="In what ways have you pursued the values of personal peace and affluence?" />
          <Question question="Are you more financial successful than your parents? Is the quality of your personal life more successful than your parents? Why, or why not?" />
          <Question question="How would you define cultural Christianity?" />
        </div>
        <div>
          <Question question="After listening to this chapter, would you call yourself a biblical Christian or a cultural Christian? Why?" />
          <Question question="If you are a cultural Christian, how do you think you became that way? What do you think were the factors that contributed to your worldview?" />
          <Question question="If you are a biblical Christian, what advice would you give to a cultural Christian that might help him get on the right track?" />
          <Question question="Where is the red dye in your life? What do you need to do to get it out?" />
        </div>
      </>
    ),
  })
  .set('4', {
    book: 'Significance',
    gradient: 'bg-gradient-to-r from-amber-200 to-yellow-500',
    identifier: 'significance',
    element: (
      <>
        <div>
          <Question question="A man’s greatest need is his need to be significant. Agree, or disagree? Explain your answer." />
          <Question question="The difference in men is in how they go about satisfying their need to be significant. Agree or disagree?" />
          <Question question="What are some of the main ways men try to satisfy this need. How do you keep score? At the end of the  day, how do you measure whether or not it’s been a successful day. How does your method compare to the way God keeps score?" />
          <Question question="How did you score on the game of 10s. What truth does this game underscore?" />
        </div>
        <div>
          <Question question="What is the difference between self gratification and significance?" />
          <Question question="What MLK did was to simply live out his conscience? Why don’t you think more men do the same?" />
          <Question question="What would you do differently if you decided to be another MLK? One of this generations handful generation of men?" />
          <Question question="Did you receive Chris or re-dedicate your life to him? If so, what are the next 2-3 steps you should take as a result." />
        </div>
      </>
    ),
  })
  .set('5', {
    book: 'Purpose',
    gradient: 'bg-gradient-to-r from-blue-800 to-indigo-900',
    identifier: 'purpose',
    element: (
      <>
        <div>
          <Question question="What is the best part of achieving your goals? What is the frustrating part of achieving goals?" />
          <Question question="Do you have a clear understanding of your life purpose? What is it? Are you satisfied with it? How can developing a written life statement help you?" />
          <Question
            question="Read Psalm 32:8 and Philippians 2:13. Will God show us his purpose for our lives? How do you think he will do so?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Psalm 32:8" identifier="psa.32.8" />
                <VerseTooltip verse="Phillipians 2:13" identifier="php.2.13" />
              </>
            )}
          />
          <Question
            question="Read Proverbs 16:9, 19:21, 21:30. According to these verses, how is the outcome of our goals and plans determined? How should this influence our thinking?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 16:9" identifier="pro.16.9" />
                <VerseTooltip verse="Proverbs 19:21" identifier="pro.19.21" />
                <VerseTooltip verse="Proverbs 21:30" identifier="pro.21.30" />
              </>
            )}
          />
        </div>
        <div>
          <Question question="Does failure to reach your goals make you angry at God? Describe one major unmet goal. Why do you think God didn’t grant your request?" />
          <Question question="The Apostle Paul had a remarkable sense of life purpose? Do you think you can have the same sense of mission, purpose, and destiny in your own life? Why, or why not?" />
        </div>
      </>
    ),
  })
  .set('6', {
    book: 'The Secret of Job Contentment',
    identifier: 'secret-of-job-contentment',
    gradient: 'bg-gradient-to-r from-fuchsia-600 to-purple-600',
    element: (
      <>
        <div>
          <Question question="What is something you do that really makes you feel God’s pleasure? What work tasks give you a deep sense of personal satisfaction?" />
          <Question
            question="Read Genesis 2:15 and then Genesis 3:17. Did you think work resulted from the fall of man? Since it is the ground that was cursed and not work, how does this affect your view of work?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Genesis 2:15" identifier="gen.2.15" />
                <VerseTooltip verse="Genesis 3:17" identifier="gen.3.17" />
              </>
            )}
          />
          <Question
            question="Read Luke 14:33. How do you think Jesus intends for us to implement this command in our lives?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Luke 14:33" identifier="luk.14.33" />
              </>
            )}
          />
          <Question question="What is your ambition? Will it survive your physical death? WIll it pass the Luke 14:33 test?" />
        </div>
        <div>
          <Question
            question="Read 1 Thessalonians 4:1, 7, and 9-12. What should be more and more the ambition of a geniune Christian? See also Colossians 3:22."
            renderReference={() => (
              <>
                <VerseTooltip verse="1 Thessalonians 4:1" identifier="1th.4.1" />
                <VerseTooltip verse="1 Thessalonians 4:7" identifier="1th.4.7" />
                <VerseTooltip verse="1 Thessalonians 4:9-12" identifier="1th.4.9-12" />
                <VerseTooltip verse="Colossians 3:22" identifier="col.3.22" />
              </>
            )}
          />
          <Question question="What area of your life have you not yet surrended to Christ. Are you the owner of your career or the branch manager?" />
        </div>
      </>
    ),
  })
  .set('7', {
    book: 'Broken Relationships',
    identifier: 'broken-relationships',
    gradient: 'bg-gradient-to-r from-teal-400 to-yellow-200',
    element: (
      <>
        <div>
          <Question question="Most men are hurting silently in their relationships. Agree or disagree? Explain your answer." />
          <Question question="One primary reason for broken relationships is mens pursuit of an ever higher standard of living. Agree or disagree? Explain your answer." />
          <Question question="Why do men get so wrapped up in their work that they work that they forget to be good husbands and fathers?" />
          <Question question="Have you found the pursuit of a higher standard of living to be worth the price? Give an example." />
        </div>
        <div>
          <Question question="Comment on this statement. No amount of success at work can compensate for failure at home." />
          <Question question="Why do you think men score so low in relationships?" />
          <Question question="How we are behind the closed doors of our own private castle is how we really are. How are you behind closed doors? What changes would help your family life?" />
          <Question question="Do you feel you’re a good communicator at work? Compare your communication skills at work with how you are doing with your wife and kids." />
        </div>
      </>
    ),
  })
  .set('8', {
    book: 'Children',
    identifier: 'children',
    gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-900',
    element: (
      <>
        <div>
          <Question question="The problems that kids face growing up today are not that much different from the problems I faced growing up. Agree or disagree? Why?" />
          <Question question="Do you give your children the freedom to be kids or do you try to make them act older than they actual are? Give an example in which you expected more from your children than you should have." />
          <Question question="Do you become angry with your children too often? What changes could you make in your attitudes & expectations that would lower your temperature?" />
          <Question question="Comment on this statement. It’s not the quantity of time but the quality. React to the statement “I’ve never heard anyone in their deathbed say, I wish I would have spend more time at work.”" />
        </div>
        <div>
          <Question question="Most men do not regularly pray for their children. Agree or disagree? Do you regularly pray for your children? If not, why? Are you willing to make prayer a regular habit?" />
          <Question question="Our children’s value system and belief system are influenced by us, teachers, coaches, professors, pastors, peers, music, movies, & television. How active have you been in monitoring these influences? What changes should you make?" />
          <Question question="Once our children become teenagers, their peers become the primary influence on their lives. What can we do while they are teenagers to get through those tough years?" />
        </div>
      </>
    ),
  })
  .set('9', {
    book: 'Wives',
    identifier: 'wives',
    gradient: 'bg-gradient-to-r from-violet-200 to-pink-200',
    element: (
      <>
        <div>
          <Question question="How was the role of women changed over the past few decades? How have these changes been for the better? How have they been for the worst?" />
          <Question
            question="Read Ephesians 5:22-33. What is the biblical role of the wife? If our wives do submit to us, what implied responsibilities do we have?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Ephesians 5:22-33" identifier="eph.5.22-33" />
              </>
            )}
          />
          <Question question="What is the biblical role of the husband? Do you think it's important for a man to feel in love with his wife? Why?" />
          <Question question="What kind of love does the bible command us to have for our wives? How is this different from the love we see portrayed on television and in movies?" />
        </div>
        <div>
          <Question question="If a marriage is not a love and submit marriage, which of the other 3 types is it most likely to be? Which of the 4 categories of marriages best illustrates your marriage? What practical steps can you take to improve your marriage?" />
          <Question question="How much time do you spend with your wife on a daily basis? What do you think of the idea of spending 20 minutes a day together talking? Will you give it a try?" />
          <Question question="If both husband and wife each give 90% and expect 10% in return, their marriage will probably end up about 50/50. Comment on this thought: What do you think of asking your wife the concept of 90/10 both ways?" />
        </div>
      </>
    ),
  })
  .set('10', {
    book: 'Friends',
    identifier: 'friends',
    gradient: 'bg-gradient-to-r from-blue-200 to-cyan-200',
    element: (
      <>
        <div>
          <Question question="Most men do not have a close friend they meet with regularly. Agree or disagree? Explain your answer." />
          <Question question="How many men do you know have who have the kind of friend mentioned in the first question. Why do you think men find it difficult to establish and maintain close friendships?" />
          <Question question="Explain the difference between an acquaintance and a friend. Do you think it’s possible to ever again have a friend like the friends of your youth?" />
          <Question question="Have you ever been stung by the betrayal of a close friend? How has the experience affected your other relationships?" />
        </div>
        <div>
          <Question question="Do you have anyone with whom you can be vulnerable? What would it be take for you to be vulnerable with a friend?" />
          <Question question="Sometimes we need a friend to give us advice. Who gives you advice?" />
          <Question question="Sometimes we need a friend to be a sounding board. Who acts as a sounding board in your life?" />
          <Question question="Sometimes we need a friend who will just listen. Do you have a friend who will feel for you without giving you a big lecture?" />
        </div>
      </>
    ),
  })
  .set('11', {
    book: 'Money',
    identifier: 'money',
    gradient: 'bg-gradient-to-r from-lime-400 to-lime-500',
    element: (
      <>
        <div>
          <Question question="Money is the path to contentment. Agree or disagree? Explain your answer." />
          <Question
            question="Money represents different things to each of us. What are the reasons you want money? For example:"
            FollowUp={
              <div>
                <ul className="list-disc">
                  <li>a symbol of achievement</li>
                  <li>a report card</li>
                  <li>a measure of self-worth</li>
                  <li>an improved standard of living</li>
                  <li>provision for your family</li>
                  <li>greed</li>
                  <li>ambition</li>
                  <li>fear</li>
                  <li>financial independence</li>
                </ul>
              </div>
            }
          />
          <Question question="Do you want to be rich? What do you think rich would do for you? For your family? For God?" />
          <Question
            question="Read Matthew 6:24. What is the greatest risk of putting money first in your life?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Matthew 6:24" identifier="mat.6.24" />
              </>
            )}
          />
        </div>
        <div>
          <Question question="Each of us has some possession or net worth goal often unstated to anyone which symbolized having arrived. What is yours? Would you be willing to say to God, “your will be done” with regard to this goal or ambition." />
          <Question
            question="What are the pressures on you to make or spend money. Read Ephesians 6:10-18. How can you overcome these pressures?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Ephesians 6:10-18" identifier="eph.6.10-18" />
              </>
            )}
          />
          <Question question="Does God want Christians to have money? Is prosperity an acceptable goal for the Christian?" />
          <Question
            question="What is your perspective of money? Do you see it as a rite you have? A necessary evil? A trust of which you are accountable or in some other way? Read 1 Corinthians 4:2."
            renderReference={() => (
              <>
                <VerseTooltip verse="1 Corinthians 4:2" identifier="1co.4.2" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('12', {
    book: 'The 4 Pillars of Financial Strength',
    identifier: '4-pillars-of-financial-strength',
    gradient: 'bg-gradient-to-r from-teal-200 to-teal-500',
    element: (
      <>
        <div>
          <Question question="The nest egg principle shows how simple it would be for all people to retire in financial security. Why do most people end up financially strapped?" />
          <Question
            question="How much money is enough for you? Why? Would you be willing to put a cap on your standard of living? Read Ecclesiastes 5:10-12"
            renderReference={() => (
              <>
                <VerseTooltip verse="Ecclesiastes 5:10-12" identifier="ecc.5.10-12" />
              </>
            )}
          />
          <Question question="Most men have too much debt. Agreee or disagree? Explain your answer." />
          <Question
            question="Read Deuteronomy 28:1-2, 12, 15, & 43-46. America became a debtor nation for the first time in our history in 1985 and has continued to steadily amass a huge foreign debt. Proverbs tells us “the borrower is a slave to the lender”. Do you think there is a correlation between our disobedience to Gods word and our growing debtor status? What are the risks we face as a nation because of this change in status?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Deuteronomy 28:1-2" identifier="deu.28.1-2" />
                <VerseTooltip verse="Deuteronomy 28:12" identifier="deu.28.12" />
                <VerseTooltip verse="Deuteronomy 28:15" identifier="deu.28.15" />
                <VerseTooltip verse="Deuteronomy 28:43-46" identifier="deu.28.43-46" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Matthew 6:24. What is the greatest risk of putting money first in your life? "
            renderReference={() => (
              <>
                <VerseTooltip verse="Matthew 6:24" identifier="mat.6.24" />
              </>
            )}
          />
          <Question question="As an individual, are you a borrower or a lender? Do you think the scriptures and the previous question apply to individuals? Why or why not? If yes, how?" />
          <Question
            question="Read Proverbs 12:9 and Proverbs 13:7. Have you used debt to supplement your personal income and pretend to be someone you are not? What is wrong with using debt in this way?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 12:9" identifier="pro.12.9" />
                <VerseTooltip verse="Proverbs 13:7" identifier="pro.13.7" />
              </>
            )}
          />
          <Question question="What action steps would you be wiling to take this week that will help put you in the position to invest 10%, sharing 10%, and getting out of debt?" />
        </div>
      </>
    ),
  })
  .set('13', {
    book: 'Decisions',
    identifier: 'decisions',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-900',
    element: (
      <>
        <div>
          <Question question="What is your personal batting average on making good decisions on the big issues?" />
          <Question question="Describe one very good decision you have made. What factors in making your decision contributed to its success?" />
          <Question question="Describe one lousy decision you have made. What caused you to make this decision? What consequences have you had to bear because of it? Would you make a different decision if you had to do it over again?" />
          <Question question="Men are the sum of the decisions they make. What are some ways in which you have observed other men ruining their lives by the decisions they make?" />
          <Question
            question="Read 1 Timothy 6:6-10. Why do you think it is so hard for men to live by God’s principles?"
            renderReference={() => (
              <>
                <VerseTooltip verse="1 Timothy 6:6-10" identifier="1ti.6.6-10" />
              </>
            )}
          />
        </div>
        <div>
          <Question question="A priority decision is a decision between right and…what? A moral decision is a decision between right and…what?" />
          <Question question="What are the 3 principles Jesus supplied when tempted to make the wrong decisions?" />
          <Question question="Every decision is at least a spiritual decision. Agree or disagree? Why or why not?" />
          <Question question="Every decision is at least a financial decision. Agree or disagree? Why or why not?" />
        </div>
      </>
    ),
  })
  .set('14', {
    book: 'Priorities',
    identifier: 'priorities',
    gradient: 'bg-gradient-to-r from-blue-600 to-violet-600',
    element: (
      <>
        <div>
          <Question question="How do your dreams and hopes for your children reflect your own priorities? Do they reveal any weak spots or blind spots in your thinking?" />
          <Question
            question="Read Matthew 22:36-38. What is and should be the significance of this command on the way we prioritize the use of our time and money?  Give an example."
            renderReference={() => (
              <>
                <VerseTooltip verse="Matthew 22:36-38" identifier="mat.22.36-38" />
              </>
            )}
          />
          <Question
            question="Read John 14:15, 21, & 23. What is the relationship between obedience and loving God? Give an example in which you obeyed in some unpleasant situation out of love for God."
            renderReference={() => (
              <>
                <VerseTooltip verse="John 14:15" identifier="jhn.14.15" />
                <VerseTooltip verse="John 14:21" identifier="jhn.14.21" />
                <VerseTooltip verse="John 14:23" identifier="jhn.14.23" />
              </>
            )}
          />
          <Question question="What is one area in your relationship with God in which you are not doing all that you should? For example - bible study, prayer, worship, sharing? What is something practical you are willing to do to improve your relationship with him?" />
          <Question
            question="Read John 15:12-14. Who is someone you would be willing to die for and why?"
            renderReference={() => (
              <>
                <VerseTooltip verse="John 15:12-14" identifier="jhn.15.12-14" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Genesis 2:15. Is vocation a holy pursuit? In what ways can our vocation contribute to God’s agenda?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Genesis 2:15" identifier="gen.2.15" />
              </>
            )}
          />
          <Question question="What good works do you think God may be calling you to do?" />
          <Question
            question="Is rest a priority with you? Or do you feel guilty when you relax? Read Matthew 11:28-30. What is Christ’s position on rest?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Matthew 11:28-30" identifier="mat.11.28-30" />
              </>
            )}
          />
          <Question question="How does the world compete in your life with biblical priorities? Give an example." />
          <Question question="How does money compete in your life with biblical priorities? Give an example." />
        </div>
      </>
    ),
  })
  .set('15', {
    book: 'Time Management',
    identifier: 'time-management',
    gradient: 'bg-gradient-to-r from-violet-200 to-pink-200',
    element: (
      <>
        <div>
          <Question
            question="One of the greatest reasons people cannot mobilize themselves is that they try to accomplish great things. Can you give an example in which you have tackled a project so big that you never could get it off the ground? What factors kept you from success. What is the best way to make progress?"
            FollowUp={<blockquote>“Most worthwhile achievements are the result of many little things done in a single direction.” - Nido Qubein</blockquote>}
          />
          <Question
            question="Read Ecclesiastes 3:1-8. So many of us are pushing hard all the time. Life seems to be a struggle. It’s as though we are trying to put 2 tons of fertilizer in a 1 ton truck. According to this passage, we can see that a sovereign God is in control of an ordered world. Do we or do we not have enough time to do everything God wants us to do. How should we approach our days if God is in fact in control?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Ecclesiastes 3:1-8" identifier="ecc.3.1-8" />
              </>
            )}
          />
          <Question question="Identify an area where you have been pushing too hard. What changes could you make to acknowledge and better enjoy God’s plan for your life. " />
        </div>
        <div>
          <Question
            question="Read Proverbs 16:2. In what ways do you deceive yourself into thinking God owed you a positive answer on plans that you have hashed without his counsel?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 16:2" identifier="pro.16.2" />
              </>
            )}
          />

          <Question
            question="Read Proverbs 16:3. What do you think it means to commit to the Lord in whatever you do and he will establish your plans?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 16:3" identifier="pro.16.3" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('16', {
    book: 'Pride',
    identifier: 'pride',
    gradient: 'bg-gradient-to-r from-green-400 to-blue-500',
    element: (
      <>
        <div>
          <Question question="Is it wrong to enjoy recognition, to let your chest swell up in pride when you are complimented? Don’t we all need to be encouraged?" />
          <Question question="Do you think the sin of pride is easy or hard to self diagnose? Why?" />
          <Question
            question="Read Romans 12:3. In the context of this verse, what is one way to define wrongful pride?"
            renderReference={() => <VerseTooltip verse="Romans 12:3" identifier="rom.12.3" />}
          />
          <Question
            question="Read Galatians 6:4. Describe the kind of pride commended in this verse."
            renderReference={() => <VerseTooltip verse="Galatians 6:4" identifier="gal.6.4" />}
          />
          <Question
            question="How have you been wronged by someone’s pride, arrogance, critical spirit, recently? How do you think that person developed such an attitude?"
            FollowUp={
              <div>
                <h3 className="text-lg">Possible answers</h3>
                <ul className="list-disc">
                  <li>Became satisfied and forgot who God is. Deuteronomy 8:10-14, 17-19</li>
                  <li>Did not possess the fear of God. Psalm 36:1 and Mark 5:39-40</li>
                  <li>Sincerely thought God wasn’t needed. James 4:13-17</li>
                </ul>
              </div>
            }
            renderReference={() => (
              <>
                <VerseTooltip verse="Deuteronomy 8:10-14" identifier="deu.8.10-14" />
                <VerseTooltip verse="Deuteronomy 8:17-19" identifier="deu.8.17-19" />
                <VerseTooltip verse="Psalm 36:1" identifier="psa.36.1" />
                <VerseTooltip verse="Mark 5:39-40" identifier="mrk.5.39-40" />
                <VerseTooltip verse="James 4:13-17" identifier="jas.4.13-17" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Proverbs 3:34, 16:5,18, 18:12 & Luke 18:14. What is the destiny of a proud man?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 3:34" identifier="pro.3.34" />
                <VerseTooltip verse="Proverbs 16:5" identifier="pro.16.5" />
                <VerseTooltip verse="Proverbs 16:18" identifier="pro.16.18" />
                <VerseTooltip verse="Proverbs 18:12" identifier="pro.18.12" />
                <VerseTooltip verse="Luke 18:14" identifier="luk.18.14" />
              </>
            )}
          />
          <Question question="Describe an area of your life (work, wife, life, kids) in which pride is hurting you? How? What can you do about it?" />
        </div>
      </>
    ),
  })
  .set('17', {
    book: 'Fear',
    identifier: 'fear',
    gradient: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    element: (
      <>
        <div>
          <Question question="All men struggle with the emotion of fear. Agree or disagree? Explain your answer." />
          <Question question="Why is it so hard to have faith, to not be afraid and to trust God?" />
          <Question
            question="What are you currently struggling with that has you afraid? How can you overcome your fear?"
            FollowUp={
              <div>
                <h3 className="text-lg">The Cycle of Fear</h3>
                <ul className="list-none">
                  <li>
                    <strong>Reality</strong> - We see the wind
                  </li>
                  <li>
                    <strong>Response</strong> - We become afraid
                  </li>
                  <li>
                    <strong>Result</strong> - We begin to sink
                  </li>
                  <li>
                    <strong>Return</strong> - Lord, save me
                  </li>
                  <li>
                    <strong>Recovery</strong> - Jesus reaches out his hand
                  </li>
                </ul>
              </div>
            }
          />
          <Question
            question="Why can't we overcome our fear in one fell swoop? Why do we have to wrestle with it day by day? Read Matthew 6:34."
            renderReference={() => <VerseTooltip verse="Matthew 6:34" identifier="mat.6.34" />}
          />

          <Question
            question="Courage and fear are opposites. See Matthew 14:27. What makes you feel courageous? What is the biblical way to courage? Read Mark 4:40."
            renderReference={() => (
              <>
                <VerseTooltip verse="Matthew 14:27" identifier="mat.14.27" />
                <VerseTooltip verse="Mark 4:40" identifier="mrk.4.40" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Describe the difference between secular fear, fear of man, and Godly fear. Read Proverbs 8:13 and 1 Peter 3:10-14."
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 8:13" identifier="pro.8.13" />
                <VerseTooltip verse="1 Peter 3:10-14" identifier="1pe.3.10-14" />
              </>
            )}
          />
          <Question
            question="When you have done everything you can do, and things still don't seem to be working out, how are you to respond? Read 1 Peter 4:12-19 & 1 Peter 5:6-7, 10."
            renderReference={() => (
              <>
                <VerseTooltip verse="1 Peter 4:12-19" identifier="1pe.4.12-19" />
                <VerseTooltip verse="1 Peter 5:6-7" identifier="1pe.5.6-7" />
                <VerseTooltip verse="1 Peter 5:10" identifier="1pe.5.10" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('18', {
    book: 'Anger',
    identifier: 'anger',
    gradient: 'bg-gradient-to-r from-red-900 to-red-500',
    element: (
      <>
        <div>
          <Question question="It's okay for men to get angry. Agree or disagree? Explain your answer." />
          <Question
            question="Read Ephesians 4:26-27. When does anger become sin?"
            renderReference={() => <VerseTooltip verse="Ephesians 4:26-27" identifier="eph.4.26-27" />}
          />
          <Question question="What is a pet peeve of yours that really ticks you off? Do you think your anger is a proper response?" />
          <Question question="When does anger have benefits that exceed the costs? Hint. Do a traditional business cost benefit analysis." />

          <Question
            question="Read Proverbs 22:24-25. What is the risk of associating with angry people?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 22:24-25" identifier="pro.22.24-25" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Review how to respond to the temptation to become angry. As per Proverbs 29:11. As per Proverbs 19:11. As per Proverbs 15:1."
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 29:11" identifier="pro.29.11" />
                <VerseTooltip verse="Proverbs 19:11" identifier="pro.19.11" />
                <VerseTooltip verse="Proverbs 15:1" identifier="pro.15.1" />
              </>
            )}
          />
          <Question
            question="Is God an angry God? Read Psalm 30:5. Psalm 78:38-39. Psalm 138:8. Jonah 4:2 & 2 Peter 3:9. Based on what these verses tell us about God, what should our attitude be?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Psalm 30:5" identifier="psa.30.5" />
                <VerseTooltip verse="Psalm 78:38-39" identifier="psa.78.38-39" />
                <VerseTooltip verse="Psalm 138:8" identifier="psa.138.8" />
                <VerseTooltip verse="Jonah 4:2" identifier="jon.4.2" />
                <VerseTooltip verse="2 Peter 3:9" identifier="2pe.3.9" />
              </>
            )}
          />
          <Question
            question="According to Galatians 5:16-17, how would you describe the 2 forces of work within you? How could a man walk by this spirit?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Galatians 5:16-17" identifier="gal.5.16-17" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('19', {
    book: 'The Desire to be Independent',
    identifier: 'the-desire-to-be-independent',
    gradient: 'bg-gradient-to-r from-violet-600 to-indigo-600',
    element: (
      <>
        <div>
          <Question question="Why do most men want to control their own lives?" />
          <Question question="In what ways have you acted as the master of your own fate?" />
          <Question
            question="Read Deuteronomy 5:7. What kinds of things do we make into gods in our culture?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Deuteronomy 5:7" identifier="deu.5.7" />
              </>
            )}
          />
          <Question
            question="What action can you take to memorialize a commitment to stop seeking to control your life and to trust in the Lord with all your heart. Proverbs 3:5."
            renderReference={() => (
              <>
                <VerseTooltip verse="Proverbs 3:5" identifier="pro.3.5" />
              </>
            )}
          />
        </div>
        <div>
          <Question question="Have you been kidding yourself about your own personal power? What kind of power do men really have? What kind of power does God have?" />
          <Question question="Most men remake God the way they want him. What can make the turning point of a man's life?" />
          <Question
            question="Did you pray the prayer at the end of the chapter? If yes, what are the next 2 or 3 steps you should take? If no, what are the next 2 or 3 steps you should take?"
            FollowUp={
              <div>
                <p>
                  Lord Jesus, I confess that I have sinned against you by seeking my own independent way. I have rebelled against you and trusted in myself. I
                  have not known you as you really are. But instead, have sought the God I wanted.
                </p>
                <br />
                <p>I am now beginning to realize the difference. Forgive me Lord. I open the door to my life and receive you as my saviour and Lord.</p>
                <br />
                <p>Thank you for dying on the cross for my sins. Take control of my life, and make me into the man you want me to be. Amen.</p>
              </div>
            }
          />
        </div>
      </>
    ),
  })
  .set('20', {
    book: 'Avoiding Suffering',
    identifier: 'avoiding-suffering',
    gradient: 'bg-gradient-to-r from-blue-800 to-indigo-900',
    element: (
      <>
        <div>
          <Question question="Is one of your goals in life to avoid suffering? Why or why not?" />
          <Question
            question="Read 1 Peter 4:12-13. Are you surprised when you suffer? How can you rejoice when you suffer? Doesn’t that seem a little unrealistic?"
            renderReference={() => (
              <>
                <VerseTooltip verse="1 Peter 4:12-13" identifier="1pe.4.12-13" />
              </>
            )}
          />
          <Question
            question="Describe a recent or current situation in which you have suffered. Which of the 7 reasons men suffer do you think could have caused your suffering?"
            FollowUp={
              <div>
                <ul className="list-none">
                  <li>An innocent mistake</li>
                  <li>An error in judgement</li>
                  <li>An integrity problem</li>
                  <li>A change in environment</li>
                  <li>An occurrence of evil</li>
                  <li>Discipline from God</li>
                  <li>Testing by God</li>
                </ul>
              </div>
            }
          />
        </div>
        <div>
          <Question
            question="What is your typical reaction to suffering? Do you resist it? Review the 5 ways we attempt to avoid suffering and comment on which one or ones you employ."
            FollowUp={
              <div>
                <ul className="list-none">
                  <li>We plead</li>
                  <li>We compare</li>
                  <li>We pout</li>
                  <li>We shout</li>
                  <li>We doubt</li>
                </ul>
              </div>
            }
          />
          <Question
            question="Read 1 Peter 5:10. What is our promise as Christians when we suffer? Do you believe God will always restore the suffering Christian? In what ways?"
            renderReference={() => (
              <>
                <VerseTooltip verse="1 Peter 5:10" identifier="1pe.5.10" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('21', {
    book: 'Integrity',
    identifier: 'integrity',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500',
    element: (
      <>
        <div>
          <Question question="Most men cut corners on the little things. For example, running yellow lights, speeding, taking office supplies home, promising 2 day delivery when knowing it will take a week. Agree or disagree? Explain your answer. Give examples - personal and observed." />
          <Question
            question="Read Luke 16:10. The principle is, as it goes with the little things so it will go with the big things. Do you agree with this principle? Do you think it’s possible to maintain 2 sets of standards? One for the little, and one for the much? Why or why not?"
            renderReference={() => <VerseTooltip verse="Luke 16:10" identifier="luk.16.10" />}
          />
          <Question question="What is an area of your life in which you struggle with being completely honest and trustworthy? What are you willing to do about it?" />
        </div>
        <div>
          <Question
            question="Read Luke 16:11-12. Jesus asks 2 rhetorical questions in these verses. How would you answer them? Why?"
            renderReference={() => <VerseTooltip verse="Luke 16:11-12" identifier="luk.16.11-12" />}
          />
          <Question
            question="Read Leviticus 6:1-5. Is restitution a valid scriptural principle in modern times? Do you need to make restitution to anyone?"
            renderReference={() => <VerseTooltip verse="Leviticus 6:1-5" identifier="lev.6.1-5" />}
          />
        </div>
      </>
    ),
  })
  .set('22', {
    book: 'Leading a Secret Thought Life',
    identifier: 'leading-a-secret-thought-life',
    gradient: 'bg-gradient-to-r from-rose-400 to-red-500',
    element: (
      <>
        <div>
          <Question question="Each of us leads a secret thought life, an invisible life which is significantly different from the man we project to others. Agree or disagree? Why?" />
          <Question
            question="Read Jeremiah 23:24. Do you believe that God knows your thoughts? Why do men put emphasis on living right among their peers who are mere manlike themselves but do not make living right in their thought lives an equally important priority?"
            renderReference={() => <VerseTooltip verse="Jeremiah 23:24" identifier="jer.23.24" />}
          />
          <Question question="What is an area of your thought life with which you really struggle? For example - lust, fantasies, hate world." />
          <Question
            question="Read Romans 8:5-6. The real battle field is the mind. According to these verses, what are the two influences on our thinking we choose between?"
            FollowUp={
              <div>
                <ul className="list-none">
                  <li>Verse 5 - What are the results of choosing each one?</li>
                  <li>Verse 6 - Have you ever heard of theory X and theory Y?</li>
                </ul>
              </div>
            }
            renderReference={() => <VerseTooltip verse="Romans 8:5-6" identifier="rom.8.5-6" />}
          />
        </div>
        <div>
          <Question question="What is the difference between a temptation and a sin? Are thoughts sins?" />
          <Question question="When does a temptation in our thought life cross the line between temptation and sin?" />
          <Question
            question="Read 2 Corinthians 10:5. What does it mean to take captive every thought?"
            renderReference={() => <VerseTooltip verse="2 Corinthians 10:5" identifier="2co.10.5" />}
          />
        </div>
      </>
    ),
  })
  .set('23', {
    book: 'Accountability',
    identifier: 'accountability',
    gradient: 'bg-gradient-to-r from-amber-200 to-yellow-500',
    element: (
      <>
        <div>
          <Question question="How many men do you know who have regularly scheduled time with Christian brothers for accountability? Why do you think so few men have accountability relationships?" />
          <Question question="How could some of the spectacular public moral failures of the recent past have been avoided?" />
          <Question
            question="Respond to this statement."
            FollowUp={
              <p>
                Some men have spectacular failures and in a moment of passion, they burst into flames, crash, and burn. More often, men make hundreds of tiny,
                undetected decisions that slowly, like water tapping on a rock, wear down their character. Not blatantly or precipitously, but subtly, we get
                caught in a web of cutting corners, compromise, and self-deceit. And no one asks us, How? Why? What? And Who? Men fall because they don&apos;t
                have to answer to anyone for their behavior and beliefs.
              </p>
            }
          />
          <Question question="How would you define accountability? What are the important ingredients in order for accountability relationships to work?" />
        </div>
        <div>
          <Question question="What is the difference between accountability and counsel? Between accountability and fellowship?" />
          <Question question="What are the key areas in which a man should be held accountable?" />
          <Question question="How would you go about selecting accountability partners?" />
          <Question question="Are you ready to establish an accountability relationship? Why or why not?" />
        </div>
      </>
    ),
  })
  .set('24', {
    book: 'How can a Man Change?',
    identifier: 'how-can-a-man-change',
    gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-900',
    element: (
      <>
        <div>
          <Question question="What makes people resist change? What makes you resist change into becoming a man scripture calls you to be?" />
          <Question question="Do you have complaints against God? Do you have unanswered questions you would like God to answer? What do you think of the statement, “Life is a big question, God is a big answer. Whatever the question, He is the answer.” Do you really need to have all the answers or is God enough?" />
          <Question question="Think about what you would like to be remembered as your last words." />
          <Question question="Are you prepared to put in the daily effort required to change? In what ways can you personally identify with the statement, “Americans have come to expect simple streamline solutions to perfectly packaged problems”. What specifically are you prepared to commit to do in daily preparation. How specifically are you prepared to deal with daily temptation? How specifically are you prepared to handle daily sin? Do you understand how to walk in the power of the Holy Spirit? Explain." />
        </div>
        <div>
          <Question question="Do you have the desire and training to see others come to a saving faith in Jesus Christ? If not, what are you prepared to do to correct that situation?" />
          <Question question="Have you been guilty of partial surrender, trying to have your cake and eat it too. Are you willing to make a clean break with the ways of the old man?" />
        </div>
      </>
    ),
  });
