// src/index.ts
import express from 'express';
import { userRoutes } from './routes/user';
import blogPostsRouter from './routes/blogPosts';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())
app.use('/user', userRoutes);
app.use('/api/blog-posts', blogPostsRouter);
app.get('/marathi_lesson', (req, res) => {
  res.json([
    {
      "title": "Lesson 1",
      "lesson": "Once upon a time, there was a hungry fox that was looking for something to eat. He was very hungry. No matter how hard he tried, the fox could not find food. Finally, he went to the edge of the forest and searched there for food. Suddenly he caught sight of a big tree with a hole in it. Inside the hole was a package. The hungry fox immediately thought that there might be food in it, and became very happy. He jumped into the hole. When he opened the package, he saw slices of bread, meat and fruit in it. An old woodcutter had placed the food in the tree trunk before he began to cut down trees in the forest. He was going to eat it for his lunch. The fox happily began to eat. After he finished eating, he felt thirsty and decided to leave the hole and drink some water from a nearby spring. However, no matter how hard he tried, he could not get out of the hole. Do you know why? Yes, the fox had eaten so much food that he became too big to fit through the hole. The fox was very sad and upset. He told himself, I wish I had thought a little before jumping into the hole. Says my author, one of the female figures in the niche is exactly like the Venus de Medici, and so on. But you must remember that everything almost has been destroyed by the iconoclastic Mohammedan; yet the remnants are more than all European debris put together I have travelled eight year and not seen many of the masterpieces. Tell sister Lock also that there is a ruined temple in forest in India, which and the Parthenon of Greece, Fergusson considers as the climax of architectural art each of its type the one of conception, the other of conception and detail. The later Mogul buildings etc., the Indo Saracenic architecture, does not compare a bit with best types of the ancients. I feel much obliged or the Bharati sent by you, and consider myself fortunate that the cause to which my humble life has been dedicated has been able to win the approbation of highly a talented lady like you. In this battle of life, men are rare who encourage the initiator of new thought, not to speak of women who would offer him encouragement, particularly in our unfortunate land. It is therefore that the approbation of an educated Bengali lady is more valuable than the loud applause of all the men of India. May the Lord grant that may women like you be born in this country, and devote their lives to the betterment of their motherland. I have something to say in this regard",
      "slug": "lesson_1"
    },
    {
      "title": "Lesson 2",
      "lesson": "As a first step towards estimating the macro-economic variables, one may assume a desired level of income to be achieved within a possible range of time. The desired level of income may be based on the goal of providing a minimum level of living for every individual. The time taken to achieve that goal will, however, depend upon the availability of domestic as well as foreign resources. Domestic savings depends upon the propensity to save while foreign resources depend upon the loans and aids from foreign countries. The propensity to save depends upon the saving tendencies of the private, corporate and public sectors. The domestic savings may tend to increase depending upon the Government’s policy of promoting and attracting different savings schemes. In the same way, Government can also encourage a higher rate of savings in the corporate sector by allowing different types of tax rebates. Government’s effort may also be directed towards the increase in their own saving by reducing uneconomic expenditure on current account and by taking measures of increasing taxes. However, any measures of increasing taxes should be so chosen that it increases the overall savings of the there broad groups. Another important measure of supplementing saving may be to deficit financing. The level of the deficit financing should be limited. While historical studies discover, describe and interpret what existed in the past, there are other kinds of investigations which study, describe and interpret what exists at present. They are concerned with conditions or relationship that exist, practices that prevail, beliefs, points of view or attitudes that are held, processes that are going on, effects that are being felt and trends that are developing. The literature of such investigations includes expressions like descriptive survey, normative status or trend. The terms survey and status suggest the gathering of evidences relating to current conditions. The term normative implies the determination of normal or typical conditions or practices. The term normative survey, is generally used for the type of research that we intend to consider here and the research which proposes to ascertain what is the normal or typical condition or practice at the present time. The normative survey type of research is not peculiar to education or to other social sciences.",
      "slug": "lesson_2"
    },
    {
      "title": "Lesson 3",
      "lesson": "Once upon a time, there was a hungry fox that was looking for something to eat. He was very hungry. No matter how hard he tried, the fox could not find food. Finally, he went to the edge of the forest and searched there for food. Suddenly he caught sight of a big tree with a hole in it. Inside the hole was a package. The hungry fox immediately thought that there might be food in it, and became very happy. He jumped into the hole. When he opened the package, he saw slices of bread, meat and fruit in it. An old woodcutter had placed the food in the tree trunk before he began to cut down trees in the forest. He was going to eat it for his lunch. The fox happily began to eat. After he finished eating, he felt thirsty and decided to leave the hole and drink some water from a nearby spring. However, no matter how hard he tried, he could not get out of the hole. Do you know why? Yes, the fox had eaten so much food that he became too big to fit through the hole. The fox was very sad and upset. He told himself, I wish I had thought a little before jumping into the hole. Says my author, one of the female figures in the niche is exactly like the Venus de Medici, and so on. But you must remember that everything almost has been destroyed by the iconoclastic Mohammedan; yet the remnants are more than all European debris put together I have travelled eight year and not seen many of the masterpieces. Tell sister Lock also that there is a ruined temple in forest in India, which and the Parthenon of Greece, Fergusson considers as the climax of architectural art each of its type the one of conception, the other of conception and detail. The later Mogul buildings etc., the Indo Saracenic architecture, does not compare a bit with best types of the ancients. I feel much obliged or the Bharati sent by you, and consider myself fortunate that the cause to which my humble life has been dedicated has been able to win the approbation of highly a talented lady like you. In this battle of life, men are rare who encourage the initiator of new thought, not to speak of women who would offer him encouragement, particularly in our unfortunate land. It is therefore that the approbation of an educated Bengali lady is more valuable than the loud applause of all the men of India. May the Lord grant that may women like you be born in this country, and devote their lives to the betterment of their motherland. I have something to say in this regard",
      "slug": "lesson_3"
    }
  ])
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});