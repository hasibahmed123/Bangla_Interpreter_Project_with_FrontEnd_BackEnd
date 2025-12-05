#include <iostream>
#include "lexer.h"
#include "parser.h"
#include "evaluator.h"

#ifdef _WIN32
#include <windows.h>
#endif

int main() {
    #ifdef _WIN32
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);
    #endif
    
    // User input
    std::cout << "ইনপুট: ";
    
    std::string userInput;
    std::getline(std::cin, userInput);
    
    if (!userInput.empty()) {
        try {
            Lexer lexer(userInput);
            auto tokens = lexer.tokenize();
            
            Parser parser(tokens);
            ASTNode* tree = parser.parseProgram();
            
            Evaluator eval;
            std::cout << "\nফলাফল:\n";
            eval.executeProgram(tree);
            
            delete tree;
            
        } catch (const std::exception& e) {
            std::cout << "ত্রুটি: " << e.what() << "\n";
        }
    }
    
    return 0;
}
