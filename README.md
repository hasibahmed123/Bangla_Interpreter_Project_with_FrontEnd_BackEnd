This is an interpreter basically where i implemented 3 phases of compiler but in near future all the 6 phases of compiler will be implemented as a full bangla compiler
and this Project has only 5 mini features for kids so that they get interested in programming from the very young age

✅Run Through Local Host: 
Run Command: npm install 
Then: node server.js
port: http://localhost:5000. 

✅Back-End command-CMD: g++ -finput-charset=UTF-8 -fexec-charset=UTF-8 -o bangla_compiler main.cpp lexer.cpp parser.cpp evaluator.cpp -std=c++11 -static-libgcc -static-libstdc++
bangla_compiler.exe


✅ টেস্ট সেট 1

পরিক্ষা ১: Arithmatic

লেখ ৫ * ২ + ৮; 
Parentheses
লেখ ( ১ + ৪ ) * ৩;
লেখ ( ১ + ৪ ) / ৩;
লেখ ( এক যোগ দুই ) গুণ তিন;

String:
লেখ "বাংলা কম্পাইলার কাজ করছে";

পরীক্ষা 2: যদি-নাহলে
ইনপুট: যদি (২ > ১) { লেখ "সঠিক"; } নাহলে { লেখ "ভুল"; }
ইনপুট: যদি (৩ == ৩) { লেখ "মিলে গেছে"; } নাহলে { লেখ "মেলেনি"; }

পরীক্ষা 3: যতক্ষণ লুপ
ইনপুট:  ক = ০; যতক্ষণ (ক < ৯ ) { লেখ ক; ক = ক + ১; }

পরীক্ষা 4: প্রতিবার লুপ
ইনপুট: প্রতিবার (খ = ০; খ < ৮; খ = খ + ২) { লেখ খ; }

পরীক্ষা 5: স্বরবর্ণচেক
ইনপুট: স্বরবর্ণচেক("ইতি");

TEST 6: String print
লেখ "বাংলা কম্পাইলার কাজ করছে";



